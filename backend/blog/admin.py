from django.contrib import admin
from .models import BookReview, Europe

class BookReviewAdmin(admin.ModelAdmin):
    list_display=[
        "author",
        "title",
        "date",
        "body",
        'image',
    ]
    
class EuropeAdmin(admin.ModelAdmin):
    list_display =[
        "author",
        "title",
        "date",
        "body",
        'image',

    ]

admin.site.register(BookReview, BookReviewAdmin)
admin.site.register(Europe, EuropeAdmin)