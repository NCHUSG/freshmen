# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roll_call', '0008_auto_20160803_0327'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rcrecord',
            name='RC_order',
            field=models.DecimalField(max_digits=2, decimal_places=0, default=1),
        ),
    ]
