# Generated by Django 3.2.24 on 2024-03-06 17:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productlisting',
            name='categories',
        ),
        migrations.RemoveField(
            model_name='productlisting',
            name='tags',
        ),
    ]
