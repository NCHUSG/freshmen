# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roll_call', '0005_auto_20160729_0835'),
    ]

    operations = [
        migrations.RenameField(
            model_name='studentfd',
            old_name='comment',
            new_name='feedback',
        ),
    ]
