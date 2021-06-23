from django.urls import re_path,path
from .consumers import ChatRommConsumer

websocket_urlpatterns=[

    re_path(r'ws/chat/(?P<room_name>\w+)/$',ChatRommConsumer),
    path('ws/indal/',ChatRommConsumer.as_asgi()),
]