from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    ShopAnalyticsViewSet,
    ShopAnalyticsViewSet,
    ShopAnalyticsViewSet,
    ShopAnalyticsViewSet,
)

router = DefaultRouter()
router.register("shopanalytics", ShopAnalyticsViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
