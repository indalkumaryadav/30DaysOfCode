from channels.layers import get_channel_layer
from django.db import models
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer 
import json

class Message(models.Model):
    title=models.CharField(max_length=200)

    def save(self,*args, **kwargs):
        channel_layer=get_channel_layer()
        data={
            'current_data':self.title
        }
        async_to_sync(channel_layer.group_send)(
            "test_group_name",{
                'type':'send_notification',
                'data':json.dumps(data)
            }
        )
        super(Message,self).save(*args, **kwargs)
