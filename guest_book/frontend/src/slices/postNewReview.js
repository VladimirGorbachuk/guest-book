import { createSlice } from "@reduxjs/toolkit";
import validateReviewFormData from "../validators/validateReviewFormData";
import axios from "axios";
import URLS from "../conf";

export const postReviewSlice = createSlice({
  name: "postReview",
  initialState: {
    sending: false,
    hasErrors: false,
    newReview: {},
    showForm: false,
    validationError: null,
  },
  reducers: {
    postReviewDisplay: (state) => {
      state.showForm = true;
    },
    postReviewValidationError: (state, err) => {
      state.hasErrors = true; //need to show particular error
      state.validationError = err.text;
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

export const sendReview = (formData) => {
  console.log("before validating");
  validateReviewFormData(formData);
  console.log("validated");
  return async (dispatch) => {
    console.log("before awaiting axios");
    axios
      .post(URLS.reviews, formData)
      .then((res) => dispatch(postReviewSuccess(res.data)))
      .catch((err) => dispatch(postReviewFailure(err.message)));
    console.log("did we await successfully?");
  };
};

const { actions, reducer: postReviewReducer } = postReviewSlice;
// Extract and export each action creator by name
export const {
  postReview,
  postReviewSuccess,
  postReviewFailure,
  postReviewDisplay,
  postReviewValidationError,
} = actions;
// Export the reducer, either as a default or named export
export default postReviewReducer;

export const postReviewSelector = (state) => state.postReviewReducer;
