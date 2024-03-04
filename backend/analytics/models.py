from django.conf import settings
from django.db import models


class ShopAnalytics(models.Model):
    "Generated Model"
    shop = models.ForeignKey(
        "shop.Shop",
        on_delete=models.CASCADE,
        null=False,
        related_name="shopanalytics_shop",
    )
    performance_metrics = models.JSONField(
        null=False,
    )
    sales_reports = models.JSONField(
        null=False,
    )
    customer_insights = models.JSONField(
        null=False,
    )


# Create your models here.
