from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostsViewSet, UserViewSet

router = DefaultRouter()

router.register('posts', PostsViewSet, basename='posts')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]