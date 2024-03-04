from rest_framework import serializers
from community.models import Community, Community


class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = "__all__"
