from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Page(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    page_title=models.CharField(max_length=200)

class Post(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    title=models.CharField(max_length=200)

class Song(models.Model):
    user=models.ManyToManyField(User)
    song_name=models.CharField(max_length=200)

    def written_by(self):
        return ",".join(([str(p) for p in self.user.all()]))
