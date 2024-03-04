from rest_framework import serializers
from analytics.models import ShopAnalytics, ShopAnalytics


class ShopAnalyticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopAnalytics
        fields = "__all__"
