from django.conf import settings
from django.db import models


class Integration(models.Model):
    "Generated Model"
    shop = models.ForeignKey(
        "shop.Shop",
        null=True,
        on_delete=models.CASCADE,
        related_name="integration_shop",
    )
    integration_type = models.CharField(
        null=False,
        choices=[
            ["PAYMENT_GATEWAY", "Payment Gateways"],
            ["SHIPPING_PROVIDER", "Shipping Providers"],
            ["ANALYTICS_SERVICE", "Analytics Services"],
        ],
        max_length=50,
    )


# Create your models here.
