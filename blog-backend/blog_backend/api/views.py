# from rest_framework import viewsets
# from .models import Post, Comment
# from .serializers import PostSerializer, CommentSerializer

# class PostViewSet(viewsets.ModelViewSet):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# class CommentViewSet(viewsets.ModelViewSet):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer

# from rest_framework import serializers
# from rest_framework import viewsets
# from .serializers import PostsSerializer, UserSerializer
# from .models import Posts
# from django.contrib.auth.models import User
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated

# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
    
# class PostsViewSet(viewsets.ModelViewSet):
#     queryset = Posts.objects.all()
#     serializer_class = PostsSerializer
#     authentication_classes = (TokenAuthentication,)

from rest_framework import viewsets
from .serializers import PostsSerializer, UserSerializer
from .models import Posts
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class PostsViewSet(viewsets.ModelViewSet):
    serializer_class = PostsSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Posts.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

