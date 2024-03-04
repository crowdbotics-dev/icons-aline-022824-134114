from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ReviewViewSet, ReviewViewSet, ReviewViewSet, ReviewViewSet

router = DefaultRouter()
router.register("review", ReviewViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
