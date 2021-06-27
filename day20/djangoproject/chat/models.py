from channels.layers import get_channel_layer
from django.db import models
from asgiref.sync import async_to_sync
# Create your models here.

class Message(models.Model):
    title=models.CharField(max_length=200)

    def save(self,*args, **kwargs):
        channel_layer= get_channel_layer()
        async_to_sync(channel_layer.group_send(
            "test_group_name",
            {
                "type": "send notification",
                "message": "message notification",
            }
            )
        )
        super(Message,self).save(*args, **kwargs)
