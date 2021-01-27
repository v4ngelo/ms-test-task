from rest_framework import serializers
from .models import Plan, PriceAdjustment


class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = ('id', 'plan', 'name', 'description', 'base_price')


class PriceAdjustmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceAdjustment
        fields = '__all__'

    id = serializers.IntegerField()
    zip_code = serializers.CharField()
    price_factor = serializers.DecimalField(max_digits=4, decimal_places=2)
