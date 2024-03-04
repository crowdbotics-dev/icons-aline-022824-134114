from rest_framework import authentication
from community.models import Community, Community, Community
from .serializers import CommunitySerializer, CommunitySerializer, CommunitySerializer
from rest_framework import viewsets


class CommunityViewSet(viewsets.ModelViewSet):
    serializer_class = CommunitySerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Community.objects.all()
