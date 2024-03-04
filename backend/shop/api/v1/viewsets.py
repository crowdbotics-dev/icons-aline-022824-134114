from rest_framework import authentication
from shop.models import Shop, Shop, Shop
from .serializers import ShopSerializer, ShopSerializer, ShopSerializer
from rest_framework import viewsets


class ShopViewSet(viewsets.ModelViewSet):
    serializer_class = ShopSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Shop.objects.all()
