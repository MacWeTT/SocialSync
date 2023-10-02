from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

docs = get_schema_view(
    openapi.Info(
        title="SocialSync API",
        default_version="v1",
        description="Welcome to SocialSync's API documentation. This API provides all the necessary endpoints required to build a fully functional social media application, as well as the best authentication and authorization system for your website.",
        contact=openapi.Contact(email="manasbajpai18@gmail.com"),
        license=openapi.License(
            name="MIT License",
            url="https://github.com/MacWeTT/SocialSync/blob/master/LICENSE.txt",
        ),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)
