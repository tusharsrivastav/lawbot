from django.db import models

# User model
class User(models.Model):
    # userId = models.AutoField(primary_key=True, auto_created=True)
    fullName = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "1. Users"

# Chats model
class Chat(models.Model):
    # chatId = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    relatedUser = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "2. Chats" 

# Messages model
class Message(models.Model):
    # messageId = models.AutoField(primary_key=True, auto_created=True)
    text = models.CharField(max_length=5000)
    sender = models.CharField(max_length=100)
    datetime = models.DateTimeField(auto_now_add=True)
    relatedChat = models.ForeignKey(Chat, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "3. Messages"