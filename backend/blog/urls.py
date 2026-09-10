from django.urls import path, include
from .views import ListBlog, ListEurope, DetailAfrica, DetailEurope

urlpatterns =[

    path('', ListBlog.as_view(), name='afro_list'),
    path('europe/', ListEurope.as_view(), name='euro_list'),
    path('<int:pk>/', DetailAfrica.as_view(), name='detail'),
    path('europe/<int:pk>/', DetailEurope.as_view(), name='detail_euro'),
]