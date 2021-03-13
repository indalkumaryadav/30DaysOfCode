from django.urls import path
from .views import CategoryProductAPIView


urlpatterns = [
    
    path('products/', CategoryProductAPIView.as_view(),name="product"),

]