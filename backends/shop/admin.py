from django.contrib import admin
from .models import Customer,Category,Cart,Product,ProductView,Brand,Order,CartProduct,Review,Slider,TrendingProduct
# Register your models here.
admin.site.register(
    (Customer,Category,Cart,Product,ProductView,Brand,Order,CartProduct,Review,Slider,TrendingProduct)
    )
