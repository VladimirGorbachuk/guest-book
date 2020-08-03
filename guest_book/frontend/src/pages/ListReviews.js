import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, reviewsSelector } from "../slices/listReviews";
import {
  postReviewSelector,
  postReviewDisplay,
  buttonHide,
} from "../slices/postNewReview";
import Review from "../components/Review";
import PostNewReview from "../components/PostNewReview";
import { v1 as uuidv1 } from "uuid";

const ListReviews = () => {
  const dispatch = useDispatch();
  const { reviews, loading, hasErrors } = useSelector(reviewsSelector);
  const { showButton } = useSelector(postReviewSelector);
  const [buttonShowForm, setButtonShowForm] = useState(
    <button onClick={showForm}>Add your review</button>
  );

  if (showButton === false && buttonShowForm !== "") {
    setButtonShowForm(() => "");
  }

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const renderReviews = () => {
    if (loading) return <p>Loading reviews...</p>;
    if (hasErrors) return <p>Unable to display reviews</p>;
    return reviews.map((review) => <Review key={uuidv1()} review={review} />);
  };

  const showForm = (e) => {
    dispatch(postReviewDisplay());
    dispatch(buttonHide());
  };

  if (showButton) {
    return (
      <div id="section">
        <button onClick={showForm}> Add your review</button>
        <PostNewReview />
        <h1>Reviews</h1>
        {renderReviews()}
      </div>
    );
  } else {
    return (
      <div id="section">
        <PostNewReview />
        <h1>Reviews</h1>
        {renderReviews()}
      </div>
    );
  }
};
export default ListReviews;
