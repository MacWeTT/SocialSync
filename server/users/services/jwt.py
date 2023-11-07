from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from users.models import User

# def jwtObtainPairSerializer() -> TokenObtainPairSerializer:
#     """
#     A customized version of `TokenObtainPairSerializer` which adds custom claims to the `access token`.
#     """


#     return CustomTokenObtainPairSerializer


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user: User):
        token = super().get_token(user)

        # Custom Claims
        token["username"] = user.username
        token["name"] = str(user.first_name + " " + user.last_name)
        token["email"] = user.email
        token["verified"] = user.verified

        return token


def jwtLogin(user: User) -> dict:
    """
    A customized version of obtaining `JSON Web Tokens`.

    Adds custom claims to the `access token` which will be used in the frontend.
    """
    refresh = RefreshToken.for_user(user)
    access = refresh.access_token

    # Custom Claims
    access["username"] = user.username
    access["name"] = str(user.first_name + " " + user.last_name)
    access["email"] = user.email
    access["verified"] = user.verified

    tokens = {"refresh": str(refresh), "access": str(access)}
    return tokens
