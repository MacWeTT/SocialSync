from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError

# Services
from .services.google import verifyGoogleUser
from .services.jwt import jwtLogin


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
