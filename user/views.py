from django.contrib.auth import login
from knox.views import LoginView
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginUserSerializer

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1]
        })


class LoginUserView(LoginView):
    serializer_class = LoginUserSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = LoginUserSerializer(data=request.data)  # changed  to desired serializer
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        request.session['user_id'] = user.id
        print(request.session['user_id'])
        return Response({
        "token": AuthToken.objects.create(user)[1]
        })