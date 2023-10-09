from django.urls import path
from .views import GoogleLoginSignupView, UserViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("all", UserViewSet, basename="users")


urlpatterns = [
    path("google/", GoogleLoginSignupView.as_view(), name="google_login_signup"),
    path("login/", TokenObtainPairView.as_view(), name="token_login"),
    path("login/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]

urlpatterns += router.urls
