from rest_framework import authentication
from product.models import ProductListing, ProductListing, ProductListing
from .serializers import (
    ProductListingSerializer,
    ProductListingSerializer,
    ProductListingSerializer,
)
from rest_framework import viewsets


class ProductListingViewSet(viewsets.ModelViewSet):
    serializer_class = ProductListingSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = ProductListing.objects.all()
