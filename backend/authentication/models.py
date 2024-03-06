from django.conf import settings
from django.db import models


class User(models.Model):
    "Generated Model"
    username = models.CharField(
        null=False,
        unique=True,
        max_length=150,
    )
    email = models.EmailField(
        null=False,
        unique=True,
    )
    password = models.CharField(
        null=False,
        max_length=255,
    )
    user_type = models.CharField(
        null=False,
        choices=[
            ["BUYER", "Buyer"],
            ["SELLER", "Maker/Seller"],
            ["ADMIN", "Administrator"],
        ],
        max_length=50,
    )
    date_joined = models.DateTimeField(
        null=False,
        auto_now_add=True,
    )


# Create your models here.
