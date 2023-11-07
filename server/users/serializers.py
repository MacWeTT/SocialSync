from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for the User model.

    Serializes the following fields:
    - id
    - username
    - bio
    - avatar
    - first_name
    - last_name
    - followers (number of users following this user)
    - following (number of users this user is following)
    """

    followers = serializers.SerializerMethodField()
    following = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "bio",
            "avatar",
            "first_name",
            "last_name",
            "followers",
            "following",
        ]

    def get_followers(self, obj):
        return obj.followers.count()

    def get_following(self, obj):
        return obj.following.count()
