import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getReviews } from "../actions";
import { reviewsSelector } from "../selectors.js";

import Review from "../components/Review";

const ListReviews = () => {
  const dispatch = useDispatch();
  if (useSelector(reviewsSelector)) {
    const { reviews, gettingReviews, hasErrors } = useSelector(reviewsSelector);
  } else {
    const { reviews, gettingReviews, hasErrors } = {};
  }

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const renderReviews = () => {
    if (gettingReviews) return <p>Loading reviews...</p>;
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
