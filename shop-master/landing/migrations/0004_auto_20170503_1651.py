# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-05-03 13:51
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0003_auto_20170122_1651'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='subscriber',
            options={'verbose_name': 'Подписчик', 'verbose_name_plural': 'Подписчики'},
        ),
    ]