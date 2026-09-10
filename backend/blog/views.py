from .serializers import BlogSerializer, EuropeSerializer
from .models import BookReview, Europe
from rest_framework import generics


class ListBlog(generics.ListCreateAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BlogSerializer

class DetailAfrica(generics.RetrieveUpdateDestroyAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BlogSerializer

class ListEurope(generics.ListCreateAPIView):
    queryset= Europe.objects.all()
    serializer_class = EuropeSerializer


class DetailEurope(generics.RetrieveUpdateDestroyAPIView):
    queryset = Europe.objects.all()
    serializer_class = BlogSerializer