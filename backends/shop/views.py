from django.shortcuts import render
from rest_framework.views import APIView
from .serializations import ProductSerializer,CategorySerializer,TrendingProductSerializer,BrandSerializer,SliderSerializer,ProductSerializer
from .models import Product,Category,TrendingProduct,Brand,Slider
from rest_framework.response import Response

class CategoryProductAPIView(APIView):

    def get(self,request):
        category=Category.objects.all()
        category_serializer=CategorySerializer(category,many=True,context={'request':request}).data

        data=[]

        for ct in category_serializer:

            product_obj= Product.objects.filter(category=ct['id'])

            ct['product']=ProductSerializer(
                product_obj, many=True, context={'request': request}).data
            data.append(ct)

        return Response(category_serializer)



class CategoryAPIView(APIView):

    def get(self,request):
        category=Category.objects.all()
        category_serializer=CategorySerializer(category,many=True,context={'request': request})
        return Response(category_serializer.data)




class TrendingProductAPIView(APIView):

    def get(self,request):
        trending_product=TrendingProduct.objects.all()
        trending_product_serializer=TrendingProductSerializer(trending_product,many=True,context={'request': request})
        data=trending_product_serializer.data
        return Response(data)

class BrandAPIView(APIView):

    def get(self,request):
        brand=Brand.objects.all()
        brand_serializer=BrandSerializer(brand,many=True,context={'request':request})
        return Response(brand_serializer.data)


class SliderAPIView(APIView):

    def get(self,request):
        slider=Slider.objects.all()
        slider_serializer=SliderSerializer(slider,many=True,context={'request':request})
        return Response(slider_serializer.data)


class ProductAPIView(APIView):

    

    def get(self,request,pk=None):
        
        if pk:
            product=Product.objects.filter(id=pk)
            product_serializer=ProductSerializer(product,many=True,context={'request':request})
            return Response(product_serializer.data)
        else:
            product=Product.objects.all()
            product_serializer=ProductSerializer(product,many=True,context={'request':request})
            return Response(product_serializer.data)