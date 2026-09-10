from django.conf import settings
from django.db import models
from django.urls import reverse
#africa
class BookReview(models.Model):
    title=models.CharField(max_length=100)
    date=models.DateTimeField()
    author=models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    body=models.TextField()
    image = models.ImageField(upload_to='destinations/', default='defaults/no-image.png')
    def __str__(self):
        return self.title
    
    class Meta:
        ordering=['-date']

    def get_absolute_url(self):
        return reverse("detail", kwargs={'pk':self.pk})


class Europe(models.Model):
    title=models.CharField(max_length=100)
    date=models.DateTimeField()
    author=models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    body=models.TextField()
    image = models.ImageField(upload_to='destinations/', default='defaults/no-image.png')
    def __str__(self):
        return self.title
    
    class Meta:
        ordering=['-date']

    def get_absolute_url(self):
        return reverse("detail", kwargs={'pk':self.pk})