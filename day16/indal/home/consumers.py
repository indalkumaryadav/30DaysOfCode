from channels.generic.websocket import AsyncWebsocketConsumer
import json

class ChatRommConsumer(AsyncWebsocketConsumer):
    
    async def connect(self):
        await self.accept()
        await self.send(text_data=json.dumps({'message':'connected'}))
    
    async def recieve(self,data):
        print(data)

