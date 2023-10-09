from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework import viewsets, permissions

User = get_user_model()
