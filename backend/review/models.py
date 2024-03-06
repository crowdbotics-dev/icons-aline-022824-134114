from django.conf import settings
from django.db import models


class Review(models.Model):
    "Generated Model"
    product = models.ForeignKey(
        "product.ProductListing",
        null=False,
        on_delete=models.CASCADE,
        related_name="review_product",
    )
    user = models.ForeignKey(
        "authentication.User",
        null=False,
        on_delete=models.CASCADE,
        related_name="review_user",
    )
    rating = models.IntegerField(
        null=False,
    )
    feedback = models.TextField(
        null=True,
    )


# Create your models here.
