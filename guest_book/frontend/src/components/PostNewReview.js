import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { sendReview, postReviewSelector } from "../slices/postNewReview";

import validateReviewData from "../validators/validateReviewData";
import { postReviewHide, buttonDisplay } from "../slices/postNewReview";
import { fetchReviews } from "../slices/listReviews";

const PostNewReview = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [image, setImage] = useState("");
  const [alertInput, setAlertInput] = useState("");

  const postReviewState = useSelector(postReviewSelector);

  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    validate();
    if (alertInput === "") {
      dispatch(sendReview({ name, message: review, image }));
      dispatch(postReviewHide());
      dispatch(buttonDisplay());
      dispatch(fetchReviews());
    }
  };

  const validate = () => {
    try {
      validateReviewData({ name, message: review, image });
      setAlertInput("");
    } catch (err) {
      setAlertInput(<h4 id={"alert-h4"}>{err.message}</h4>);
    }
  };
  console.log(postReviewState.showForm);

  if (postReviewState.showForm === true) {
    return (
      <div>
        {alertInput}
        <form onSubmit={submit} onChange={validate}>
          <div>
            <label for={"name"}>enter your name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label for={"review"}>enter your review</label>
            <input
              type="text"
              name="review"
              id="input-review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div>
            <label for={"image"}>you can upload your image (optionally)</label>
            <input
              className="file-input"
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
          </div>
          <div id="form-buttons-div">
            <button type="submit">Submit</button>

            <button
              type="close"
              onClick={() => {
                dispatch(postReviewHide());
              }}
            >
              Close dialogue
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default PostNewReview;
