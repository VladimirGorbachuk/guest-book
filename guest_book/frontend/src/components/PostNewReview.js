import React, { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { sendReview, postReviewSelector } from "../slices/postNewReview";

import validateReviewData from "../validators/validateReviewData";
import { postReviewDisplay, postReviewHide } from "../slices/postNewReview";

const PostNewReview = () => {
  const [name, setName] = React.useState("");
  const [review, setReview] = React.useState("");
  const [image, setImage] = React.useState("");
  const [alert, setAlert] = React.useState("");

  const postReviewState = useSelector(postReviewSelector);

  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    validate();
    if (alert === "") {
      dispatch(sendReview({ name, message: review, image }));
      dispatch(postReviewHide());
    }
  };

  const validate = () => {
    try {
      validateReviewData({ name, message: review, image });
      setAlert("");
    } catch (err) {
      setAlert(<h4>{err.message}</h4>);
    }
  };
  console.log(postReviewState.showForm);

  if (postReviewState.showForm === true) {
    return (
      <div>
        {alert}
        <form onSubmit={submit} onChange={validate}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <input
            type="file"
            name="image"
            defaultValue=""
            onChange={(e) => {
              const fileList = e.target.files;
              if (fileList.length > 0) {
                setImage(fileList[0]);
              }
            }}
          />
          <button type="submit">Submit</button>
        </form>
        <button
          type="close"
          onClick={() => {
            dispatch(postReviewHide());
          }}
        >
          Close dialogue
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default PostNewReview;
