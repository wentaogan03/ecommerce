from django.urls import path
from store import views

urlpatterns = [
    path('category/', views.CategoryListView.as_view(), name='category_list'),
]