from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('', views.sentimental_analysis, name='sentimental_analysis')
]
