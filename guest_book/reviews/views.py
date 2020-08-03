from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from reviews.models import Review
from reviews.serializers import ReviewSerializer


@api_view(['GET', 'POST'])
def review_list(request):
    """
    List all reviews/create new review.
    """
    
    if request.method == 'GET':
        reviews = Review.objects.order_by('-created_at')
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
