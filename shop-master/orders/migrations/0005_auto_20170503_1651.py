# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-05-03 13:51
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_auto_20170205_1206'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='order',
            options={'verbose_name': 'Оформленный Заказ', 'verbose_name_plural': 'Оформленные Заказы'},
        ),
        migrations.AlterModelOptions(
            name='status',
            options={'verbose_name': 'Состояние заказа', 'verbose_name_plural': 'Состояние'},
        ),
    ]
