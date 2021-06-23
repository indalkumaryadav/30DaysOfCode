from django.urls import re_path,path
from .consumers import ChatRommConsumer

websocket_urlpatterns=[

    path('ws/indal/',ChatRommConsumer.as_asgi()),
]