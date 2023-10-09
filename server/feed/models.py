from django.db import models
from django.contrib.auth import get_user_model
import uuid

User = get_user_model()


class Base(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Community(Base):
    name = models.CharField(max_length=255)
    description = models.TextField()
    admins = models.ManyToManyField(User, related_name="communities")
    members = models.ManyToManyField(User, related_name="communities_joined")
    banner = models.ImageField(upload_to="communities", blank=True, null=True)

    def __str__(self):
        return self.name


class Post(Base):
    community = models.ForeignKey(
        Community, related_name="posts", on_delete=models.CASCADE
    )
    title = models.CharField(max_length=255)
    caption = models.TextField()
    author = models.ForeignKey(User, related_name="posts", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="posts", blank=True, null=True)

    def __str__(self):
        return self.title

    def getLikes(self):
        return self.likes.count()


class Like(Base):
    post = models.ForeignKey(Post, related_name="likes", on_delete=models.CASCADE)
    author = models.ForeignKey(User, related_name="likes", on_delete=models.CASCADE)

    def __str__(self):
        return self.post.title


class Comment(Base):
    post = models.ForeignKey(Post, related_name="comments", on_delete=models.CASCADE)
    author = models.ForeignKey(User, related_name="comments", on_delete=models.CASCADE)
    text = models.TextField()
    parent_comment = models.ForeignKey(
        "self", on_delete=models.CASCADE, null=True, blank=True, related_name="replies"
    )

    def __str__(self):
        return self.text


class Notification(Base):
    user = models.ForeignKey(
        User, related_name="notifications", on_delete=models.CASCADE
    )
    is_read = models.BooleanField(default=False)

    # Define choices for the notification type (e.g., follow, like, comment)
    NOTIFICATION_TYPES = (
        ("follow", "Follow"),
        ("like", "Like"),
        ("comment", "Comment"),
    )
    notification_type = models.CharField(max_length=10, choices=NOTIFICATION_TYPES)
    title = models.CharField(max_length=255, blank=True, null=True)
    content = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.user.username} - {self.notification_type} on {self.title}"

    class Meta:
        ordering = ["-created_at"]
