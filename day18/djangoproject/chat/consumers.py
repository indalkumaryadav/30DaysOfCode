import json
from channels.generic.websocket import AsyncWebsocketConsumer

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name="test_room_name"
        self.room_group_name="test_group_name"
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()
        
        await self.send(text_data=json.dumps({'message':'hello indal'}))
     
    
    async def receive(self, text_data):
        await self.send(text_data=json.dumps({'message':text_data}))
    

    async def disconnect(self,*args, **kwargs):
        print("channel disconneted.")
        
