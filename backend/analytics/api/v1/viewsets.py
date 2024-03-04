from rest_framework import authentication
from analytics.models import ShopAnalytics, ShopAnalytics, ShopAnalytics
from .serializers import (
    ShopAnalyticsSerializer,
    ShopAnalyticsSerializer,
    ShopAnalyticsSerializer,
)
from rest_framework import viewsets


class ShopAnalyticsViewSet(viewsets.ModelViewSet):
    serializer_class = ShopAnalyticsSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = ShopAnalytics.objects.all()
