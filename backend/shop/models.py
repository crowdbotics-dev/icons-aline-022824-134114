from django.conf import settings
from django.db import models


class Shop(models.Model):
    "Generated Model"
    owner = models.ForeignKey(
        "authentication.User",
        on_delete=models.CASCADE,
        null=False,
        related_name="shop_owner",
    )
    name = models.CharField(
        max_length=255,
        unique=True,
        null=False,
    )
    policies = models.TextField(
        null=True,
    )
    shipping_details = models.TextField(
        null=True,
    )
    payment_methods = models.JSONField(
        null=True,
    )


# Create your models here.
