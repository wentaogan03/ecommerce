from rest_framework import serializers
from store.models import Store, Product, Category
from users.serializers import UserSerializer

class StoreSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Store
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):

     class Meta:
         model = Category
         fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    store = StoreSerializer()
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = "__all__"