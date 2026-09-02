from django.shortcuts import render
from store.serializers import StoreSerializer, ProductSerializer, CategorySerializer
from store.models import Store, Category, Product
from rest_framework.permissions import AllowAny
from rest_framework import generics

class CategoryListView(generics.ListCreateAPIView):
    serializer_class = CategorySerializer
    permission_classes = (AllowAny, )
    queryset = Category.objects.all()


class ProductListView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    permission_classes = (AllowAny, )
    queryset = Product.objects.all()


class ProductDetailView(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    permission_classes = (AllowAny, )
    queryset = Product.objects.all()


class StoreListView(generics.ListCreateAPIView):
    serializer_class = StoreSerializer
    permission_classes = (AllowAny, )
    queryset = Store.objects.all()


class StoreDetailView(generics.RetrieveAPIView):
    serializer_class = StoreSerializer
    permission_classes = (AllowAny, )
    queryset = Store.objects.all()
