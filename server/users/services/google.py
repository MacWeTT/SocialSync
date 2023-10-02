from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.conf import settings
import requests

User = get_user_model()

GOOGLE_ID_TOKEN_INFO_URL = "https://www.googleapis.com/oauth2/v3/tokeninfo"
GOOGLE_ACCESS_TOKEN_OBTAIN_URL = "https://oauth2.googleapis.com/token"
GOOGLE_USER_INFO_URL = "https://www.googleapis.com/oauth2/v3/userinfo"


def verifyGoogleUser(code: str) -> dict:
    """
    Verify the `Google user`. Send the authorization code to the Google servers and obtain an access token.

    If obtained, Google user exists, and we can proceed further with authentication.

    Returns the user which was verified via Google. If user doesn't exist, creates a user with the details obtained from Google.

    `Also, verify the user if not yet verified.`
    """
    AccessToken = googleObtainToken(code)

    if AccessToken:
        googleUser = googleObtainUserInfo(accessToken=AccessToken)
        try:
            user = User.objects.get(email=googleUser["email"])
            if not user.verified:
                user.verified = True
                user.save()
        except User.DoesNotExist:
            user = createGoogleUser(googleUser)
        return user
    else:
        return None


def googleObtainToken(code: str) -> str:
    """
    Use an authorization code to fetch `JSON Web Tokens` from the Google servers. This will always give you JWT's as your Google account exists.

    Returns the `access token` obtained from the response.
    """
    redirect_uri = "http://localhost:3000"

    data = {
        "code": code,
        "client_id": settings.GOOGLE_OAUTH2_CLIENT_ID,
        "client_secret": settings.GOOGLE_OAUTH2_CLIENT_SECRET,
        "redirect_uri": redirect_uri,
        "grant_type": "authorization_code",
    }
    response = requests.post(GOOGLE_ACCESS_TOKEN_OBTAIN_URL, data=data)

    if not response.ok:
        raise ValidationError("Failed to obtain access token from Google.")

    accessToken = response.json()["access_token"]
    return accessToken


def googleObtainUserInfo(*, accessToken: str) -> dict:
    """
    Use an `access token` to fetch the user information from the Google servers.
    """
    response = requests.get(GOOGLE_USER_INFO_URL, params={"access_token": accessToken})

    if not response.ok:
        raise ValidationError("Invalid Google Access Token")

    userInfo: dict = response.json()
    return userInfo


def createGoogleUser(UserInfo: dict) -> User:
    """
    Create a user object from the user information fetched from Google.
    """
    email: str = UserInfo["email"]
    username: str = email.split("@")[0]
    user, created = User.objects.get_or_create(
        email=email,
        defaults={
            "username": username,
            "first_name": UserInfo["given_name"],
            "last_name": UserInfo["family_name"],
            "verified": UserInfo["email_verified"],
        },
    )
    if created:
        user.set_unusable_password()
        user.save()
    return user


def googleValidateIDToken(*, idToken: str) -> bool:
    response = requests.get(GOOGLE_ID_TOKEN_INFO_URL, params={"id_token": idToken})
    print(response)

    if not response.ok:
        raise ValidationError("Invalid Google ID Token")

    audience = response.json()["aud"]

    if audience != settings.GOOGLE_OAUTH2_CLIENT_ID:
        raise ValidationError("Invalid Audience")

    return True
