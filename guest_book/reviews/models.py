from django.db import models
from image_sizes import IMAGE_SIZE

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
    
    def save(self, *args, **kwargs):
        # we resize images before saving for uniform at frontend and to exclude
        # cases with extremely large image files uploaded
        super().save(*args, **kwargs)

        if self.image:
            img = Image.open(self.image.path)
            img.thumbnail(IMAGE_SIZE)
            img.save(self.image.path)