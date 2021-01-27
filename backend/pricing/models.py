from django.db import models


class Plan(models.Model):
    plan = models.CharField(max_length=20)
    name = models.CharField(max_length=30)
    description = models.TextField()
    base_price = models.IntegerField()


class PriceAdjustment(models.Model):
    zip_code = models.IntegerField()
    price_factor = models.DecimalField(max_digits=4, decimal_places=2)
