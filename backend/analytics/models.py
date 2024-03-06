from django.conf import settings
from django.db import models


class ShopAnalytics(models.Model):
    "Generated Model"
    shop = models.ForeignKey(
        "shop.Shop",
        null=False,
        on_delete=models.CASCADE,
        related_name="shopanalytics_shop",
    )


# Create your models here.
