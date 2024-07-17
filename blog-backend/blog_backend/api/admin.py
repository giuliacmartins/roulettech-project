from django.contrib import admin
from .models import Posts

@admin.register(Posts)
class PostsModel(admin.ModelAdmin):
    list_filter = ('title','description')
    list_display = ('title','description')