from django.conf import settings
from django.db import models


class Community(models.Model):
    "Generated Model"
    title = models.CharField(
        null=False,
        max_length=255,
    )
    content = models.TextField(
        null=False,
    )
    date_published = models.DateTimeField(
        null=False,
        auto_now_add=True,
    )


# Create your models here.
