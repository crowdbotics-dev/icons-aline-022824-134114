from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ShopViewSet, ShopViewSet, ShopViewSet, ShopViewSet

router = DefaultRouter()
router.register("shop", ShopViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
