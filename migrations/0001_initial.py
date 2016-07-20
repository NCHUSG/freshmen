# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RCRecord',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('create', models.DateTimeField()),
                ('present', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='RCStu',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('studentID', models.CharField(max_length=20)),
                ('team', models.CharField(max_length=10)),
            ],
        ),
        migrations.AddField(
            model_name='rcrecord',
            name='RCStu',
            field=models.ForeignKey(to='roll_call.RCStu'),
        ),
    ]
