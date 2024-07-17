# from django.db import models

# class Post(models.Model):
#     title = models.CharField(max_length=200)
#     content = models.TextField()

#     def __str__(self):
#         return self.title

# class Comment(models.Model):
#     post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)
#     author = models.CharField(max_length=100)
#     text = models.TextField()

#     def __str__(self):
#         return f'Comment by {self.author} on {self.post}'

from django.db import models

class Posts(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    
    def __str__(self):
        return self.title