from django.urls import path
from .views import CategoryProductAPIView,CategoryAPIView,TrendingProductAPIView,BrandAPIView,SliderAPIView,ProductAPIView,MostViewedProductAPIView,SingleCategoryView


urlpatterns = [
    
    path('products/', CategoryProductAPIView.as_view(),name="product"),
    path('all/products/', ProductAPIView.as_view(),name="all_product"),
    path('all/products/<int:pk>/', ProductAPIView.as_view(),name="all_product"),
    path('categories/', CategoryAPIView.as_view(),name="category"),
    path('trending/products/', TrendingProductAPIView.as_view(),name="trending_product"),
    path('brand/', BrandAPIView.as_view(),name="brand"),
    path('slider/', SliderAPIView.as_view(),name="slider"),
    path('product/view/', MostViewedProductAPIView.as_view(),name="product_view"),
    path('singlecategoris/<int:pk>/', SingleCategoryView.as_view()),
   

]