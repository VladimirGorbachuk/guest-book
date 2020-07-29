from reviews.models import Review
from rest_framework import viewsets, permissions
from .serializers import ReviewSerializer

# Lead Viewset


class ReviewViewSet(viewsets.ModelViewSet):
    '''
    simple viewset, without any query functionality (i.e. currently querying by author is not  implemented)
    '''
    permission_classes_by_action = {'create': [AllowAny]} #here it is written explicitly to simplify further changes (if needed)

    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        serializer.save()  