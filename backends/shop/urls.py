from django.urls import path
from .views import CategoryProductView,CategorisView,SingleCategoryView


urlpatterns = [
     path('categoryproducts/', CategoryProductView.as_view()),
    path('categoris/', CategorisView.as_view()),
    path('singlecategoris/<int:pk>/', SingleCategoryView.as_view()),
   

]