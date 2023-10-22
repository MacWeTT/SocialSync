from typing import Any
from django.core.management.base import BaseCommand
from feed.models import Community
import json, os

JSON_DIR = os.path.join(os.path.dirname(__file__), "data")


class CreateCommunities(BaseCommand):
    help = "Creates dummy communities"

    def handle(self, *args, **options) -> None:
        self.stdout.write(
            self.style.NOTICE("Creating dummy communities. This may take a while...")
        )
