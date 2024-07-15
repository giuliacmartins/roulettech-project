# from django.shortcuts import render
# from rest_framework import generics
# from .models import Post, Comment
# from .serializers import PostSerializer, CommentSerializer

# class PostListCreate(generics.ListCreateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# class PostDetail(generics.RetrieveAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# class CommentCreate(generics.CreateAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer

# blog/views.py
from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, World! This is your Django app.")
