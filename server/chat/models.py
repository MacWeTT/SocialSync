from django.contrib.auth import get_user_model
from django.db import models
import uuid

User = get_user_model()


class Base(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Conversation(Base):
    participants = models.ManyToManyField(User, related_name="conversations")

    def __str__(self):
        return self.id


class Message(Base):
    conversation_id = models.ForeignKey(Conversation, on_delete=models.CASCADE)
    sender = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    text = models.TextField()

    class Meta:
        ordering = ["created_at"]

    # attachment = models.FileField(upload_to="attachments", null=True, blank=True)
