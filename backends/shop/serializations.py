from rest_framework import serializers
from .models import Product,Category,TrendingProduct,Brand

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields="__all__"
        depth=1
    def imageurl(self, obj):
        request = self.context.get('request')
        return request.url(image)
    

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields="__all__"
        depth=1

class TrendingProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=TrendingProduct
        fields="__all__"
        depth=2
        
        # def imageUrl(self,obj):
        #     request=
        #     return 


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model=Brand
        fields="__all__"
        depth=1