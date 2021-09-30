import json
from user.models import User
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from numpy.lib.function_base import median
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse, FileResponse
from medicine.models import Medicines,Prescription
from medicine.serializers import PrescriptionSerializer,MedicineSerializer
from PIL import Image
import io
from random import randrange
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
from pharmageddon.settings import EMAIL_HOST_USER
from django.core.mail import EmailMessage


# Create your views here.
medicines = []
@csrf_exempt
def prescriptionApi(request):
    if request.method=='GET':
        prescription = Prescription.objects.all()
        prescription_serializer = PrescriptionSerializer(prescription, many=True)
        return JsonResponse(prescription_serializer.data,safe=False)

    elif request.method=='POST':
        #prescription_data=JSONParser().parse(request)
        import pytesseract
        import textrazor
        pytesseract.pytesseract.tesseract_cmd=r'C:/Program Files/Tesseract-OCR/tesseract.exe'
        image = Image.open(io.BytesIO(request.FILES['file'].read()))
        content = pytesseract.image_to_string(image)
        print(content)
        textrazor.api_key = '68b4c30ba86b6801a69853b38ea2b508df40463afc2daf378c4ec6c2'
        client = textrazor.TextRazor(extractors=["entities", "topics"])
        response = client.analyze(content)
        
        for entity in response.entities():
            if 'ChemicalSubstance' in entity.dbpedia_types:        #Case when entity is recongnised as ChemicalSubstance
                medicines.append(str(entity.matched_text).lower())
            elif 'Drug' in entity.dbpedia_types:                     #Case when entity is recongnised as Drug
                medicines.append(str(entity.matched_text).lower())
        print(content)
        
        return JsonResponse({'medicines':medicines})

    elif request.method=='PUT':
        prescription_data = JSONParser().parse(request)
        prescription=Prescription.objects.get(PrescriptionId=prescription_data['PrescriptionId'])
        prescription_serializer = PrescriptionSerializer(data=prescription_data)
        if prescription_serializer.is_valid():
            prescription_serializer.save()
            return JsonResponse("Updated Successfully!!",safe=False)
        return JsonResponse("Failed to Update.",safe=False)

    elif request.method=='DELETE':
        prescription=Prescription.object.get(PrescriptionId=id)
        prescription.delete()
        return JsonResponse("Deleted")

import json
import datetime

@csrf_exempt
def cart(request):
    if request.method=='POST':
        pres_dict=JSONParser().parse(request)
        print(pres_dict)
        print(len(medicines))
        for i in range(len(medicines)):
            if (pres_dict[i]==True):
                p=randrange(1,10)*15
                pres_instance=Prescription.objects.create(med_name=medicines[i],quantity=1,date=datetime.datetime.now(),price=p)
        medicines.clear()
        return JsonResponse({"result":"ok"})
    else:
        prescription = Prescription.objects.all()
        prescription_serializer = PrescriptionSerializer(prescription, many=True)
        medicines.clear()
        return JsonResponse(prescription_serializer.data,safe=False)

import os
@csrf_exempt
def pay(request):
    if request.method=='GET':
        # imports module
        from tempfile import NamedTemporaryFile
        from InvoiceGenerator.api import Invoice, Item, Client, Provider, Creator
        # choose english as language
        os.environ["INVOICE_LANG"] = "en"
        client = Client('Prajakta Ramteke')
        provider = Provider('PharmaGeddon', bank_account='2600420569', bank_code='2010')
        creator = Creator('PharmaGeddon')
        invoice = Invoice(client, provider, creator)
        #invoice.currency_locale = 'en_IN'
        for item in Prescription.objects.all():
            invoice.add_item(Item(item.quantity,item.price, description=item.med_name))
        from InvoiceGenerator.pdf import SimpleInvoice
        pdf = SimpleInvoice(invoice)
        pdf.gen("invoice.pdf", generate_qr_code=True)
        filepath = os.path.join('invoice.pdf')
        return FileResponse(open(filepath, 'rb'), content_type='application/pdf')


@csrf_exempt
def medicineApi(request):
    if request.method=='GET':
        medicine =  Medicines.objects.all()
        medicines_serializer = MedicineSerializer(medicine, many=True)
        return JsonResponse(medicines_serializer.data,safe=False)

    elif request.method=='POST':
        medicine_data=JSONParser().parse(request)
        medicines_serializer = MedicineSerializer(data=medicine_data)
        if medicines_serializer.is_valid():
            medicines_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    elif request.method=='PUT':
        medicine_data = JSONParser().parse(request)
        medicines=Medicines.objects.get(medicineId=medicine_data['medicineId'])
        medicines_serializer = MedicineSerializer(data=medicine_data)
        if medicines_serializer.is_valid():
            medicines_serializer.save()
            return JsonResponse("Updated Successfully!!",safe=False)
        return JsonResponse("Failed to Update.",safe=False)

    elif request.method=='DELETE':
        medicine=Medicines.object.get(medicineId=id)
        medicine.delete()
        return JsonResponse("Deleted")
