from django.contrib import admin
from .models import Post, Community, Comment


@admin.register(Post)
class Post(admin.ModelAdmin):
    list_display = ("title", "caption", "author", "image", "created_at")


@admin.register(Community)
class Community(admin.ModelAdmin):
    list_display = ("name", "description", "created_at")


@admin.register(Comment)
class Comment(admin.ModelAdmin):
    list_display = ("post", "author", "text", "parent_comment", "created_at")
