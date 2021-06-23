from django.urls import path
from .consumers import *

websocket_urlpatterns=[

    path("ws/indal/",TestConsumer.as_asgi())
]