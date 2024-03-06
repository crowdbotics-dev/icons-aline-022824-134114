from django.conf import settings
from django.db import models


class ProductListing(models.Model):
    "Generated Model"
    shop = models.ForeignKey(
        "shop.Shop",
        null=False,
        on_delete=models.CASCADE,
        related_name="productlisting_shop",
    )
    title = models.CharField(
        null=False,
        max_length=255,
    )
    description = models.TextField(
        null=True,
    )
    price = models.DecimalField(
        null=False,
        max_digits=10,
        decimal_places=2,
    )


# Create your models here.
