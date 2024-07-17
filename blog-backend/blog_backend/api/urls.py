# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import PostViewSet, CommentViewSet

# router = DefaultRouter()
# router.register(r'posts', PostViewSet)
# router.register(r'comments', CommentViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostsViewSet, UserViewSet

router = DefaultRouter()

router.register('posts', PostsViewSet, basename='posts')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]