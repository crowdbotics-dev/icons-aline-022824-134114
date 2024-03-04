from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    ProductListingViewSet,
    ProductListingViewSet,
    ProductListingViewSet,
    ProductListingViewSet,
)

router = DefaultRouter()
router.register("productlisting", ProductListingViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
