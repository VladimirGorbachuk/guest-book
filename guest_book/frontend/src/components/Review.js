import React, { useState } from "react";
import dateConversion from "../utils/dateConversion";

const Review = ({ review }) => {
  const [imageBlock, setImageBlock] = useState("");
  if (review.image !== null && imageBlock === "") {
    setImageBlock(
      <div className="review-image">
        <span>image:</span>
        <img src={review.image} alt="image"></img>
      </div>
    );
  }
  return (
    <div className="review">
      <div className="review-details">
        <p>
          <span>username:</span>
          {review.name}
        </p>
        <p>
          <span>message:</span>
          {review.message}:
        </p>
        <p>
          <span>date posted:</span>
          {dateConversion(review.created_at)}
        </p>
      </div>
      {imageBlock}
    </div>
  );
};

export default Review;
