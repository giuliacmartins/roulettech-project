from django.shortcuts import redirect
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostsViewSet, UserViewSet

router = DefaultRouter()

router.register('posts', PostsViewSet, basename='posts')
router.register('users', UserViewSet)

def redirect_to_api(request):
    return redirect('/api/')

urlpatterns = [
    path('', redirect_to_api),
    path('api/', include(router.urls)),
]