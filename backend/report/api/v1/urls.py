from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ReportViewSet, ReportViewSet, ReportViewSet, ReportViewSet

router = DefaultRouter()
router.register("report", ReportViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
