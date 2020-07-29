from django.db import models

class Review(models.Model):
    '''
    contains name, message, optional image and date created. 
    All constraints are in the model for easier security breach detection
    '''
    name = models.CharField(min_length=3,max_length=32, blank = False)
    message = models.CharField(min_length=16,max_length=512, blank = False)
    image = models.ImageField(
        default=None, upload_to='review_pics', blank = True)
    created_at = models.DateTimeField(auto_now_add=True)
