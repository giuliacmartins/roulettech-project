# from rest_framework import serializers
# from .models import Post, Comment

# class CommentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Comment
#         fields = '__all__'

# class PostSerializer(serializers.ModelSerializer):
#     comments = CommentSerializer(many=True, read_only=True)

#     class Meta:
#         model = Post
#         fields = '__all__'

# from rest_framework import serializers
# from .models import Posts
# from django.contrib.auth.models import User
# from rest_framework.authtoken.views import Token

# class PostsSerializer(serializers.ModelSerializer):
#     class Meta: 
#         model = Posts
#         fields = ['id','title','description']
                  
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id','username','password']
        
#         extra_kwargs = {'password':{
#             'write_only':True,
#             'required':True
#         }}
        
#     def create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         Token.objects.create(user=user)
#         return user

from rest_framework import serializers
from .models import Posts
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class PostsSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Posts
        fields = ['id', 'title', 'description', 'user']
        read_only_fields = ['user']
                  
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        
        extra_kwargs = {'password': {
            'write_only': True,
            'required': True
        }}
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user