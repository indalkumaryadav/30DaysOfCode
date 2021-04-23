from django.contrib import admin
from .models import Post,Page,Song
# Register your models here.


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display=["id","user","title"]

@admin.register(Song)
class SongAdmin(admin.ModelAdmin):
    list_display=["id","song_name","written_by"]

@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display=["id","user","page_title"]