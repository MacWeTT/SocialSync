from .views import PostViewSet
from rest_framework import routers

urlpatterns = []


router = routers.SimpleRouter()
router.register(r"posts", PostViewSet, basename="posts")

urlpatterns += router.urls
