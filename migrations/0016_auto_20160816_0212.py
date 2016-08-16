# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('roll_call', '0015_auto_20160816_0144'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rcstu',
            name='user',
        ),
        migrations.AddField(
            model_name='rcstu',
            name='id',
            field=models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True, default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='rcstu',
            name='upperUser',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL, default=1),
        ),
    ]
