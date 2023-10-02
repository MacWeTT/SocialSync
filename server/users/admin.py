from django.contrib import admin
from django.contrib.auth import get_user_model

User = get_user_model()


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("username", "email", "is_superuser")
    list_filter = ("is_staff", "is_active", "is_superuser")
    search_fields = ("username", "email")
    ordering = ("username",)
