# Generated by Django 3.2.4 on 2021-09-24 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medicine', '0002_prescription_user_med'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prescription',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]