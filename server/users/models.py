from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    avatar = models.ImageField(upload_to="avatars/", null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    # add roles
    verified = models.BooleanField(default=False)
    followers = models.ManyToManyField(
        "self", related_name="user_followees", symmetrical=False
    )
    following = models.ManyToManyField(
        "self", related_name="user_followers", symmetrical=False
    )

    def __str__(self):
        return self.username

    @property
    def getFollowers(self):
        return self.followers.count()

    @property
    def getFollowing(self):
        return self.following.count()
