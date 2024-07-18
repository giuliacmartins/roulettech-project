from django.db import models
from django.contrib.auth.models import User

class Posts(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts", default=1)
    title = models.CharField(max_length=100)
    description = models.TextField()
    
    def __str__(self):
        return self.title