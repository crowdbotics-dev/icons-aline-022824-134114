from django.conf import settings
from django.db import models


class Integration(models.Model):
    "Generated Model"
    shop = models.ForeignKey(
        "shop.Shop",
        on_delete=models.CASCADE,
        null=True,
        related_name="integration_shop",
    )
    integration_type = models.CharField(
        max_length=50,
        null=False,
        choices=[
            ["PAYMENT_GATEWAY", "Payment Gateways"],
            ["SHIPPING_PROVIDER", "Shipping Providers"],
            ["ANALYTICS_SERVICE", "Analytics Services"],
        ],
    )
    details = models.JSONField(
        null=False,
    )


# Create your models here.
