from django.urls import path
from .views import CategoryProductAPIView,CategoryAPIView,TrendingProductAPIView,BrandAPIView,SliderAPIView


urlpatterns = [
    
    path('products/', CategoryProductAPIView.as_view(),name="product"),
    path('categories/', CategoryAPIView.as_view(),name="category"),
    path('trending/products/', TrendingProductAPIView.as_view(),name="trending_product"),
    path('brand/', BrandAPIView.as_view(),name="brand"),
    path('slider/', SliderAPIView.as_view(),name="slider"),

]