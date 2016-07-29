# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roll_call', '0004_studentfd_studentst'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rcrecord',
            name='present',
            field=models.BooleanField(default=True, choices=[(True, '出席'), (False, '缺席')]),
        ),
    ]
