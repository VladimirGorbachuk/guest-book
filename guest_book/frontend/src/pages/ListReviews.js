import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, reviewsSelector } from "../slices/listReviews";
import { postReviewDisplay } from "../slices/postNewReview";
import Review from "../components/Review";
import PostNewReview from "../components/PostNewReview";

const ListReviews = () => {
  const dispatch = useDispatch();
  const { reviews, loading, hasErrors } = useSelector(reviewsSelector);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const renderReviews = () => {
    if (loading) return <p>Loading reviews...</p>;
    if (hasErrors) return <p>Unable to display reviews</p>;
    return reviews.map((review) => (
      <Review key={review.name + review.message} review={review} />
    ));
  };

  const showForm = (e) => {
    dispatch(postReviewDisplay());
  };

  return (
    <section>
      <button onClick={showForm}>Add your review</button>
      <PostNewReview />
      <h1>Reviews</h1>
      {renderReviews()}
    </section>
  );
};

export default ListReviews;
