from django.urls import path
from store import views

urlpatterns = [
    path('category/', views.CategoryListView.as_view(), name='category_list'),
    path('product/', views.ProductListView.as_view(), name='product_list'),
    path('product/<int:pk>/', views.ProductDetailView.as_view(), name='product_detail'),
]