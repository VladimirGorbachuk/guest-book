from django.urls import path
from reviews import views

urlpatterns = [
    path('reviews/', views.review_list),
]