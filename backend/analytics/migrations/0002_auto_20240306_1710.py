# Generated by Django 3.2.24 on 2024-03-06 17:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('analytics', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shopanalytics',
            name='customer_insights',
        ),
        migrations.RemoveField(
            model_name='shopanalytics',
            name='performance_metrics',
        ),
        migrations.RemoveField(
            model_name='shopanalytics',
            name='sales_reports',
        ),
    ]
