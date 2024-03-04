from rest_framework import serializers
from product.models import ProductListing, ProductListing


class ProductListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductListing
        fields = "__all__"
