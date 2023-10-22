from rest_framework.serializers import Serializer, ModelSerializer
from .models import Post, Comment, Vote, Notification, Community
from django.contrib.auth import get_user_model

User = get_user_model()
