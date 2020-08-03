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
    showButton: true,
  },
  reducers: {
    postReviewDisplay: (state) => {
      state.showForm = true;
    },
    postReviewHide: (state) => {
      state.showForm = false;
    },
    buttonDisplay: (state) => {
      state.showButton = true;
    },
    buttonHide: (state) => {
      state.showButton = false;
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
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("message", data.message);

  if (data.image !== "") {
    formData.append("image", data.image, data.image.name);
  }
  return async (dispatch) => {
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
  buttonDisplay,
  buttonHide,
  postReviewValidationError,
} = actions;

export default postReviewReducer;

export const postReviewSelector = (state) => state.postReviewReducer;
