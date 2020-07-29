from django.contrib import admin
from models import Review

admin.site.register(Review) # this wasn't specified, but most likely we should be able to edit/delete reviews
