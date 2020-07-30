//component for listing reviews

import React from "react";
import PropTypes from "prop-types";
import ReviewElement from "./ReviewElement";

const ReviewList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

ListReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.instanceOf(ReviewElement).isRequired)
    .isRequired,
};

export default listReviews;
