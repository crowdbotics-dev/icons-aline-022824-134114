from django.conf import settings
from django.db import models


class Report(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "authentication.User",
        null=False,
        on_delete=models.CASCADE,
        related_name="report_user",
    )
    issue = models.TextField(
        null=False,
    )
    escalation_status = models.CharField(
        null=False,
        choices=[
            ["PENDING", "Pending"],
            ["REVIEWING", "Reviewing"],
            ["RESOLVED", "Resolved"],
        ],
        max_length=50,
    )
    date_reported = models.DateTimeField(
        null=False,
        auto_now_add=True,
    )


# Create your models here.
