import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import URLS from "../conf";

export const postReviewSlice = createSlice({
  name: "postReview",
  initialState: {
    sending: false,
    hasErrors: false,
    newReview: {},
    showForm: false,
  },
  reducers: {
    postReviewDisplay: (state) => {
      state.showForm = true;
    },
    postReviewHide: (state) => {
      state.showForm = false;
    },
    postReview: (state) => {
      state.sending = true;
      state.validationError = null;
    },
    postReviewSuccess: (state, { payload }) => {
      state.review = { ...state.review, payload };
      state.sending = false;
      state.hasErrors = false;
    },
    postReviewFailure: (state) => {
      state.sending = false;
      state.hasErrors = true;
    },
  },
});

export const sendReview = (data) => {
  console.log("we are sending", data);
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("message", data.message);

  if (data.image !== "") {
    formData.append("image", data.image, data.image.name);
  }
  return async (dispatch) => {
    console.log("before awaiting axios");
    axios
      .post(URLS.reviews, formData)
      .then((res) => dispatch(postReviewSuccess(res.data)))
      .catch((err) => dispatch(postReviewFailure(err.message)));
  };
};

const { actions, reducer: postReviewReducer } = postReviewSlice;

export const {
  postReview,
  postReviewSuccess,
  postReviewFailure,
  postReviewDisplay,
  postReviewHide,
  postReviewValidationError,
} = actions;

export default postReviewReducer;

export const postReviewSelector = (state) => state.postReviewReducer;
