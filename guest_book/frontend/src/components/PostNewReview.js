import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { sendReview, postReviewSelector } from "../slices/postNewReview";

const PostNewReview = () => {
  const [name, setName] = React.useState("");
  const [review, setReview] = React.useState("");
  const [image, setImage] = React.useState("");
  const postReviewState = useSelector(postReviewSelector);

  const dispatch = useDispatch();
  const form = useRef(null);

  const submit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", review);
    console.log(image);
    formData.append("image", image, image.name);
    /*
    console.log("this is another approach", new FormData(form.current));
    console.log("this is the form", event.target);
    const formData = new FormData(event.target);
    console.log("this is the formdata we made", formData);
    console.log("this is another approach", new FormData(form));
    */
    console.log(formData);
    dispatch(sendReview(formData));
  };

  if (postReviewState.showForm === true) {
    return (
      <div>
        <form ref={form} onSubmit={submit}>
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
      </div>
    );
  } else {
    return null;
  }
};

export default PostNewReview;
