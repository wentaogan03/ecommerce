from django.db import models
from users.models import User

class Store(models.Model):
    # related_name use for reverse lookup
    user = models.OneToOneField(User, on_delete=models.SET_NULL, related_name="store", null=True, blank=True)
    image = models.ImageField(upload_to="store", default="default/default-store.jpg", null=True, blank=True)
    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True, blank=True, null=True)
    description = models.TextField(null=True, blank=True)
    verified = models.BooleanField(default=False)
    contact = models.CharField(max_length=20)
    active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
        

class Category(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Product(models.Model):
    STATUS = (
        ("PB", "Published"),
        ("IR", "In Review"),
        ("DI", "Disabled"),
        ("DR", "Draft")
    )
    title = models.CharField(max_length=500)
    image = models.ImageField(upload_to="products", default="default/default-products.jpg", null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    quantity = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(choices=STATUS, max_length=2, default="DR")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
