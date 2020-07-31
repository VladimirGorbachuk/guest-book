import React, { useState, useEffect } from "react";
import { addReview } from "../actions";

const WriteReview = () => {
  const [name, setName] = React.useState("");
  const [review, setReview] = React.useState("");
  const [image, setImage] = React.useState(null);

  return (
    <div>
      <form>
        <div>
          <label>
            Enter your name
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Write your review below
            <input
              type="text"
              name="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Choose image (optional)
            <input
              type="file"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            onClick={() => {
              formData = new FormData();
              addReview(formData);
            }}
          ></button>
        </div>
      </form>
    </div>
  );
};

export default WriteReview;
