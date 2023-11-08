from rest_framework import status
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework_simplejwt.views import TokenObtainPairView

# Services
from .services.google import verifyGoogleUser
from .services.jwt import jwtLogin, CustomTokenObtainPairSerializer

# Miscallaneous
from .serializers import UserSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class LoginViewAPI(TokenObtainPairView):
    """
    A REST view for handling Login.
    """

    permission_classes = [AllowAny]
    serializer_class = CustomTokenObtainPairSerializer


class GoogleLoginSignupView(APIView):
    """
    A REST view for handling Google Login and Signup.

    Creates a user if the user doesn't exist,
    otherwise logs the user in via the authorization code sent by the frontend.
    """

    def post(self, request):
        data = request.data
        codeObj = data["code"]
        user = verifyGoogleUser(codeObj)
        if user is not None:
            tokens = jwtLogin(user=user)
        else:
            raise ValidationError("Google user doesn't exist.")

        return Response(tokens, status=status.HTTP_200_OK)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    A viewset for viewing users, and retrieving a user by username.
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "username"
