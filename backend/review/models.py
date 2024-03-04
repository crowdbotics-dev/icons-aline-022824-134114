from django.conf import settings
from django.db import models


class Review(models.Model):
    "Generated Model"
    product = models.ForeignKey(
        "product.ProductListing",
        on_delete=models.CASCADE,
        null=False,
        related_name="review_product",
    )
    user = models.ForeignKey(
        "authentication.User",
        on_delete=models.CASCADE,
        null=False,
        related_name="review_user",
    )
    rating = models.IntegerField(
        null=False,
    )
    feedback = models.TextField(
        null=True,
    )


# Create your models here.
