from django.urls import path
from store import views

urlpatterns = [
    path('category/', views.CategoryListView.as_view(), name='category_list'),
    path('product/', views.ProductListView.as_view(), name='product_list'),
    path('product/<int:pk>/', views.ProductDetailView.as_view(), name='product_detail'),
    path('store/', views.StoreListView.as_view(), name='store_list'),
    path('store/<int:pk>/', views.StoreDetailView.as_view(), name='store_detail'),
]