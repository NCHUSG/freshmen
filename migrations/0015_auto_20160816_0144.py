# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('roll_call', '0014_auto_20160816_0144'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rcstu',
            name='id',
        ),
        migrations.AlterField(
            model_name='rcstu',
            name='user',
            field=models.OneToOneField(primary_key=True, to=settings.AUTH_USER_MODEL, serialize=False),
        ),
    ]
