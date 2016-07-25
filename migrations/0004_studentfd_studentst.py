# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roll_call', '0003_rcstu_gender'),
    ]

    operations = [
        migrations.CreateModel(
            name='StudentFD',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('comment', models.CharField(max_length=100)),
                ('create', models.DateTimeField()),
                ('RCStu', models.ForeignKey(to='roll_call.RCStu')),
            ],
        ),
        migrations.CreateModel(
            name='StudentST',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('comment', models.CharField(max_length=100)),
                ('create', models.DateTimeField()),
                ('RCStu', models.ForeignKey(to='roll_call.RCStu')),
            ],
        ),
    ]
