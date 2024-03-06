# Generated by Django 3.2.24 on 2024-03-04 15:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("authentication", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Order",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("order_details", models.JSONField()),
                (
                    "payment_status",
                    models.CharField(
                        choices=[
                            ["PAID", "Paid"],
                            ["PENDING", "Pending"],
                            ["FAILED", "Failed"],
                        ],
                        max_length=50,
                    ),
                ),
                ("shipping_info", models.JSONField(null=True)),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="order_user",
                        to="authentication.user",
                    ),
                ),
            ],
        ),
    ]
