from django.db import models


class User(models.Model):
    name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    birthday = models.DateField()
    about = models.CharField(max_length=120, null=True)
    registerDate = models.DateTimeField(auto_now=True)


class Email(models.Model):
    email = models.EmailField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Password(models.Model):
    password = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Phone(models.Model):
    phone = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Picture(models.Model):
    picture = models.FileField(upload_to='pictures')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

