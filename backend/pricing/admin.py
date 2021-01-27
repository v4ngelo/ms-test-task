from django.contrib import admin
from .models import Plan, PriceAdjustment


class PlanAdmin(admin.ModelAdmin):
    list_display = ('plan', 'name')


class PriceAdjustmentAdmin(admin.ModelAdmin):
    list_display = ('zip_code', 'price_factor')


admin.site.register(Plan, PlanAdmin)
admin.site.register(PriceAdjustment, PriceAdjustmentAdmin)
