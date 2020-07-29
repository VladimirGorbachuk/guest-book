//a React component corresponding to one review
import React from "react";
import PropTypes from "prop-types";

const reviewElement = ({ user, message, image, datePosted }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);

reviewElement.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
};

export default Todo;

export default reviewElement;
