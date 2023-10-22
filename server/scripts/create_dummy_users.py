from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
import json, os

JSON_DIR = os.path.join(os.path.dirname(__file__), "data")
User = get_user_model()


class CreateUsers(BaseCommand):
    help = "Creates dummy users"

    def handle(self, *args, **kwargs):
        self.stdout.write(
            self.style.NOTICE("Creating dummy users. This may take a while...")
        )
        with open(f"{JSON_DIR}/users.json") as file:
            data = json.load(file)

        user_instances = []
        for user_data in data:
            user = User(
                first_name=user_data["first_name"],
                last_name=user_data["last_name"],
                email=user_data["email"],
                username=user_data["username"],
                bio=user_data["bio"],
            )
            user.set_password(user_data["password"])
            user_instances.append(user)

        try:
            User.objects.bulk_create(user_instances)
        except Exception as e:
            self.stderr.write(self.style.ERROR(f"Error creating dummy users: {e}"))
        finally:
            self.stdout.write(self.style.SUCCESS("Successfully created dummy users."))
