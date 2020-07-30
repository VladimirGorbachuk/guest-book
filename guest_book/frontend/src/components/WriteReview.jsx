import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import addReview from "../actions/actions";
import axios from "axios";

function writeReview() {
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
              addReview(name, review, image);
            }}
          ></button>
        </div>
      </form>
    </div>
  );
}

function handleChange(evt) {
  const value = evt.target.value;
  setState({
    ...state,
    [evt.target.name]: value,
  });
}

export default WriteReview;
