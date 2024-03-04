from django.conf import settings
from django.db import models


class ProductListing(models.Model):
    "Generated Model"
    shop = models.ForeignKey(
        "shop.Shop",
        on_delete=models.CASCADE,
        null=False,
        related_name="productlisting_shop",
    )
    title = models.CharField(
        max_length=255,
        null=False,
    )
    description = models.TextField(
        null=True,
    )
    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=False,
    )
    categories = models.JSONField()
    tags = models.JSONField()


# Create your models here.
