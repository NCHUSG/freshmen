# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roll_call', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='rcrecord',
            name='RC_order',
            field=models.DecimalField(default=1, max_digits=1, decimal_places=0),
        ),
    ]
