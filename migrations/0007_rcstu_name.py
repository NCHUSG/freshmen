# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roll_call', '0006_auto_20160729_0857'),
    ]

    operations = [
        migrations.AddField(
            model_name='rcstu',
            name='name',
            field=models.CharField(default='Name', max_length=10),
        ),
    ]
