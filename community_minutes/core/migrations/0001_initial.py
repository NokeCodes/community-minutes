# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2016-09-24 16:41
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Meeting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('place', models.TextField()),
                ('docref', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Movement',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('description_ref', models.IntegerField()),
                ('document_ref', models.IntegerField()),
                ('meeting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.Meeting')),
            ],
        ),
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('position', models.TextField()),
                ('name', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Vote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('yay_vote', models.BooleanField()),
                ('movement', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.Movement')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.Person')),
            ],
        ),
        migrations.AddField(
            model_name='meeting',
            name='organization',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.Organization'),
        ),
        migrations.AddField(
            model_name='attendance',
            name='meeting',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.Meeting'),
        ),
        migrations.AddField(
            model_name='attendance',
            name='person',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.Person'),
        ),
    ]