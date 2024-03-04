from rest_framework import authentication
from integration.models import Integration, Integration, Integration
from .serializers import (
    IntegrationSerializer,
    IntegrationSerializer,
    IntegrationSerializer,
)
from rest_framework import viewsets


class IntegrationViewSet(viewsets.ModelViewSet):
    serializer_class = IntegrationSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Integration.objects.all()
