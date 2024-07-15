from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Post, Comment

def post_list(request):
    posts = Post.objects.all()
    data = {
        'posts': list(posts.values())
    }
    return JsonResponse(data)

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    data = {
        'post': {
            'title': post.title,
            'content': post.content,
            'created_at': post.created_at,
            'comments': list(post.comments.values())
        }
    }
    return JsonResponse(data)

def create_comment(request, pk):
    post = get_object_or_404(Post, pk=pk)
    author = request.POST.get('author')
    content = request.POST.get('content')
    comment = Comment(post=post, author=author, content=content)
    comment.save()
    return JsonResponse({'message': 'Comment created successfully'})