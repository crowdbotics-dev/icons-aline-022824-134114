from django.conf import settings
from django.db import models


class Community(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
        null=False,
    )
    content = models.TextField(
        null=False,
    )
    date_published = models.DateTimeField(
        auto_now_add=True,
        null=False,
    )


# Create your models here.
