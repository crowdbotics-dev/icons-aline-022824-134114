from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    IntegrationViewSet,
    IntegrationViewSet,
    IntegrationViewSet,
    IntegrationViewSet,
)

router = DefaultRouter()
router.register("integration", IntegrationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
