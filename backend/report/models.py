from django.conf import settings
from django.db import models


class Report(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "authentication.User",
        on_delete=models.CASCADE,
        null=False,
        related_name="report_user",
    )
    issue = models.TextField(
        null=False,
    )
    escalation_status = models.CharField(
        max_length=50,
        null=False,
        choices=[
            ["PENDING", "Pending"],
            ["REVIEWING", "Reviewing"],
            ["RESOLVED", "Resolved"],
        ],
    )
    date_reported = models.DateTimeField(
        auto_now_add=True,
        null=False,
    )


# Create your models here.
