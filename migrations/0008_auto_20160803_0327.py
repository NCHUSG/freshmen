# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roll_call', '0007_rcstu_name'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='rcstu',
            options={'permissions': (('is_RC_staff', '是興鮮人的工作人員'),)},
        ),
    ]
