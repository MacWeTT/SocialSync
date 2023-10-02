from django.contrib import admin
from django.urls import path, include
from .docs import docs

urlpatterns = [
    path("admin/", admin.site.urls),
]

apps = [
    path("users/", include("users.urls")),
    path("feed/", include("feed.urls")),
    path("chat/", include("chat.urls")),
]

docs = [
    path("docs/", docs.with_ui("swagger", cache_timeout=0), name="API Docs"),  # Swagger
    path("redoc/", docs.with_ui("redoc", cache_timeout=0), name="API Docs"),  # ReDoc
]

urlpatterns += apps
urlpatterns += docs
