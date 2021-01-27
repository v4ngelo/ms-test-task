from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from .serializers import PlanSerializer, PriceAdjustmentSerializer
from .models import Plan, PriceAdjustment


class PlanView(viewsets.ModelViewSet):
    serializer_class = PlanSerializer
    queryset = Plan.objects.all()


class PriceAdjustmentView(viewsets.ModelViewSet):
    queryset = PriceAdjustment.objects.all()
    serializer_class = PriceAdjustmentSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['zip_code']

