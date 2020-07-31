//a React component corresponding to one review
import React from "react";
import PropTypes from "prop-types";

const Review = (review) => {
  if (!!image) {
    return (
      <li>
        <p>
          <span>username:</span>
          {review.user}
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
          {review.user}
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

Review.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired, //due to possible null image
  date: PropTypes.instanceOf(Date),
};

export default Review;
