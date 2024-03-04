from django.conf import settings
from django.db import models


class User(models.Model):
    "Generated Model"
    username = models.CharField(
        max_length=150,
        null=False,
        unique=True,
    )
    email = models.EmailField(
        null=False,
        unique=True,
    )
    password = models.CharField(
        max_length=255,
        null=False,
    )
    user_type = models.CharField(
        max_length=50,
        null=False,
        choices=[
            ["BUYER", "Buyer"],
            ["SELLER", "Maker/Seller"],
            ["ADMIN", "Administrator"],
        ],
    )
    date_joined = models.DateTimeField(
        null=False,
        auto_now_add=True,
    )


# Create your models here.
