from django.conf import settings
from django.db import models


class Order(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "authentication.User",
        null=False,
        on_delete=models.CASCADE,
        related_name="order_user",
    )
    payment_status = models.CharField(
        null=False,
        choices=[["PAID", "Paid"], ["PENDING", "Pending"], ["FAILED", "Failed"]],
        max_length=50,
    )


# Create your models here.
