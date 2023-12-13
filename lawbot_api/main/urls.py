from django.urls import path
from . import views

urlpatterns = [
    path('user/', views.UserList.as_view()),
    path('user/<int:pk>/', views.UserDetail.as_view()),
    path('chat/', views.ChatList.as_view()),
    path('chat/<int:pk>/', views.ChatDetail.as_view()),
    path('message/', views.MessageList.as_view()),
    path('message/<int:pk>/', views.MessageDetail.as_view()),
]