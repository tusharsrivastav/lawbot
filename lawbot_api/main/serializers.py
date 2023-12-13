from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ['id', 'fullName', 'username', 'email', 'password']

class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Chat
        fields = ['id', 'title', 'relatedUser']

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Message
        fields = ['id', 'text', 'sender', 'datetime', 'relatedChat']
