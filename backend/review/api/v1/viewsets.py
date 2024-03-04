from rest_framework import authentication
from review.models import Review, Review, Review
from .serializers import ReviewSerializer, ReviewSerializer, ReviewSerializer
from rest_framework import viewsets


class ReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Review.objects.all()
