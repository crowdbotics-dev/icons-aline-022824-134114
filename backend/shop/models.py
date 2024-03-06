from django.conf import settings
from django.db import models


class Shop(models.Model):
    "Generated Model"
    owner = models.ForeignKey(
        "authentication.User",
        null=False,
        on_delete=models.CASCADE,
        related_name="shop_owner",
    )
    name = models.CharField(
        null=False,
        unique=True,
        max_length=255,
    )
    policies = models.TextField(
        null=True,
    )
    shipping_details = models.TextField(
        null=True,
    )


# Create your models here.
