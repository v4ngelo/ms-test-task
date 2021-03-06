# Generated by Django 3.1.5 on 2021-01-16 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Plan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plan', models.CharField(max_length=20)),
                ('name', models.CharField(max_length=30)),
                ('base_price', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='PriceAdjustment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('zip_code', models.IntegerField()),
                ('price_factor', models.DecimalField(decimal_places=2, max_digits=4)),
            ],
        ),
    ]
