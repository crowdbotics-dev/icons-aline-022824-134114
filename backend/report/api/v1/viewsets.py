from rest_framework import authentication
from report.models import Report, Report, Report
from .serializers import ReportSerializer, ReportSerializer, ReportSerializer
from rest_framework import viewsets


class ReportViewSet(viewsets.ModelViewSet):
    serializer_class = ReportSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Report.objects.all()
