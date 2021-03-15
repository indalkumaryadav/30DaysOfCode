from rest_framework import serializers
from .models import Product,Category,TrendingProduct,Brand,Slider

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
        model = Category
        fields = "__all__"

        def imageurl(self, obj):
            request = self.context.get('request')
            return request.url(image)
           
    
class TrendingProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=TrendingProduct
        fields="__all__"
        depth=2
        
        def imageurl(self, obj):
            request = self.context.get('request')
            return request.url(image)


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model=Brand
        fields="__all__"
        depth=1
        def imageurl(self, obj):
            request = self.context.get('request')
            return request.url(image)

class SliderSerializer(serializers.ModelSerializer):
    class Meta:
        model=Slider
        fields="__all__"
        
        def imageurl(self, obj):
            request = self.context.get('request')
            return request.url(image)