//a React component corresponding to one review
import React from "react";
import PropTypes from "prop-types";

const Review = ({ review }) => {
  console.log(
    "that is the review, which we try to render in Review component",
    review
  );
  console.log(
    "username, message, image:",
    review.name,
    review.message,
    review.image
  );
  if (!!review.image) {
    return (
      <li>
        <p>
          <span>username:</span>
          {review.name}
        </p>
        <p>
          <span>message:</span>
          {review.message}:
        </p>
        <span>image:</span>
        <img src={review.image} alt="image"></img>
        <p>
          <span>date posted:</span>
          {review.datePosted}
        </p>
      </li>
    );
  } else {
    return (
      <li>
        <p>
          <span>username:</span>
          {review.name}
        </p>
        <p>
          <span>message:</span>
          {review.message}
        </p>
        <p>
          <span>date posted:</span>
          {review.datePosted}
        </p>
      </li>
    );
  }
};

/*
Review.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired, //due to possible null image
  date: PropTypes.instanceOf(Date),
};
*/
export default Review;
