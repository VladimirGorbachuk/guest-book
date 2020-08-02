import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchReviews, reviewsSelector } from "../slices/listReviews";

import Review from "../components/Review";

const ListReviews = () => {
  const dispatch = useDispatch();
  const { reviews, loading, hasErrors } = useSelector((state) => {
    console.log(state);
    return state.reviewsReducer;
  });

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const renderReviews = () => {
    if (loading) return <p>Loading reviews...</p>;
    if (hasErrors) return <p>Unable to display reviews</p>;

    return reviews.map((review) => (
      <Review key={review.name} review={review} excerpt />
    ));
  };

  return (
    <section>
      <button>Add your review</button>
      <h1>Reviews</h1>
      {renderReviews()}
    </section>
  );
};
//TODO: button isn't working currently

export default ListReviews;
