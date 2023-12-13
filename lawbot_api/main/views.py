from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, permissions
from .serializers import UserSerializer, ChatSerializer, MessageSerializer
from . import models

# Create your views here.

class UserList(generics.ListCreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated]

class UserDetail(generics.ListCreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated]

class ChatList(generics.ListCreateAPIView):
    queryset = models.Chat.objects.all()
    serializer_class = ChatSerializer
    # permission_classes = [permissions.IsAuthenticated]

class ChatDetail(generics.ListCreateAPIView):
    queryset = models.Chat.objects.all()
    serializer_class = ChatSerializer
    # permission_classes = [permissions.IsAuthenticated]

class MessageList(generics.ListCreateAPIView):
    queryset = models.Message.objects.all()
    serializer_class = MessageSerializer
    # permission_classes = [permissions.IsAuthenticated]

class MessageDetail(generics.ListCreateAPIView):
    queryset = models.Message.objects.all()
    serializer_class = MessageSerializer
    # permission_classes = [permissions.IsAuthenticated]




