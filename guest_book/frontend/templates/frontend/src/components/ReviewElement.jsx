//a React component corresponding to one review
import React from "react";
import PropTypes from "prop-types";

const ReviewElement = ({ user, message, image, datePosted }) => {
  if (!!image) {
    return (
      <li>
        <p>
          <span>username:</span>
          {user}
        </p>
        <p>
          <span>username:</span>
          {message}:
        </p>
        <span>image</span>
        <img src={image} alt="image"></img>
        <p>
          <span>date posted:</span>
          {datePosted}
        </p>
      </li>
    );
  } else {
    return (
      <li>
        <p>
          <span>username:</span>
          {user}
        </p>
        <p>
          <span>username:</span>
          {message}:
        </p>
        <p>
          <span>date posted:</span>
          {datePosted}
        </p>
      </li>
    );
  }
};

reviewElement.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
};

export default ReviewElement;
