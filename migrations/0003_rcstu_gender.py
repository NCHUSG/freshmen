# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roll_call', '0002_rcrecord_rc_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='rcstu',
            name='gender',
            field=models.CharField(max_length=1, default='M', choices=[('M', 'Male'), ('F', 'Female')]),
        ),
    ]
