from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    CommunityViewSet,
    CommunityViewSet,
    CommunityViewSet,
    CommunityViewSet,
)

router = DefaultRouter()
router.register("community", CommunityViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
