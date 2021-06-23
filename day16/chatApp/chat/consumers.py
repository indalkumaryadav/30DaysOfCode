from channels.generic.websocket import AsyncWebsocketConsumer
import json

class ChatRommConsumer(AsyncWebsocketConsumer):
    
    async def connect(self):
        self.accept()
        self.send(text_data="Welcome")

