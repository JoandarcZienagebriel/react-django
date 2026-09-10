from rest_framework import serializers
from .models import BookReview, Europe


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookReview
        fields = ('title', 'body', 'date', 'author', 'image',)


class EuropeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Europe
        fields = ('title', 'body', 'date', 'author', 'image',)