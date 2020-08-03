from rest_framework import serializers
from reviews.models import Review

class ReviewSerializer(serializers.ModelSerializer):

    
    class Meta:
        model = Review
        fields = ['name','message','image','created_at']
    name = serializers.CharField(
        min_length=3,
        max_length=32,)
    message = serializers.CharField(
        min_length=16,
        max_length=512,)
    image = serializers.ImageField(required = False, use_url = True)

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Review.objects.create(**validated_data)