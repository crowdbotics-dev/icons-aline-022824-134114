from django.conf import settings
from django.db import models


class Order(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "authentication.User",
        on_delete=models.CASCADE,
        null=False,
        related_name="order_user",
    )
    order_details = models.JSONField(
        null=False,
    )
    payment_status = models.CharField(
        max_length=50,
        null=False,
        choices=[["PAID", "Paid"], ["PENDING", "Pending"], ["FAILED", "Failed"]],
    )
    shipping_info = models.JSONField(
        null=True,
    )


# Create your models here.
