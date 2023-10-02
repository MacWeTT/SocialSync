from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    avatar = models.ImageField(upload_to="avatars/", null=True, blank=True)
    verified = models.BooleanField(default=False)
    followers = models.ManyToManyField(
        "self", related_name="user_followees", symmetrical=False
    )
    following = models.ManyToManyField(
        "self", related_name="user_followers", symmetrical=False
    )
