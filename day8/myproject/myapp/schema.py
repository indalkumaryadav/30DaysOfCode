import graphene
from graphene_django import DjangoObjectType
from .models import Post


class PostType(DjangoObjectType):
    class Meta:
        model=Post
        fields=("id","title")


class Query(graphene.ObjectType):
    all_posts=graphene.List(PostType)

    def resolve_all_posts(root,info):
        return Post.objects.get(id=1)

schema=graphene.Schema(query=Query)