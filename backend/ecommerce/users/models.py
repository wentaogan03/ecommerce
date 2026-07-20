from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=500)
    otp = models.CharField(max_length=1000, null=True, blank=True)
    reset_token = models.CharField(max_length=1000, null=True, blank=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email

    def __unicode__(self):
        return self.username


class Profile(models.Model):
    GENDER = (
        ("Male", "M"),
        ("Female", "F"),
        ("Other", "O"), 
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(
        upload_to="accounts/users",
        default="default/default-user.jpg",
        null=True,
        blank=True,
    )
    about = models.TextField(null=True, blank=True)
    gender = models.CharField(max_length=500, choices=GENDER, null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True, null=True, blank=True)


    class Meta:
        ordering = ["-date"]

    def __str__(self):
            return str(self.user.first_name) + " " + str(self.user.last_name)
