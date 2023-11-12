from django.contrib.auth import get_user_model
from django.shortcuts import render
from django.shortcuts import get_object_or_404

# Models
from .models import Post

# Rest Framework
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny

# Serializers
from .serializers import PostSerializer

User = get_user_model()


class PostViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing posts.
    """

    permission_classes = [AllowAny]
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    def list(self, request) -> Response:
        """
        List all the latest posts, in a paginated format.
        """
        queryset = Post.objects.all()
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request) -> Response:
        """
        API endpoint that allows a user to create a post.
        """
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def retrieve(self, request, pk=None) -> Response:
        """
        Retrieve a specific post by id.
        """
        queryset = Post.objects.all()
        post = get_object_or_404(queryset, pk=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        """
        Delete a specific post by id.
        """
        return super().destroy(request, *args, **kwargs)
