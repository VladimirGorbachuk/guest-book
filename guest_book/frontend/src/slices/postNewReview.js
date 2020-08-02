import { createSlice } from "@reduxjs/toolkit";
import validateReviewFormData from "../validators/validateReviewFormData";

export const postReviewSlice = createSlice({
  name: "postReview",
  initialState: {
    sending: false,
    hasErrors: false,
    newReview: {},
  },
  reducers: {
    postReviewValidationError: (state, err) => {
      state.hasErrors = true; //need to show particular error
    },
    postReview: (state) => {
      state.sending = true;
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

export const addReview = (formData) => {
  validateReviewFormData(formData).catch((err) => dispatch(err));
  return async (dispatch) => {
    dispatch(postReview());

    axios
      .post(URLS.reviews, formData)
      .then((res) => dispatch(postReviewSuccess(res.data)))
      .catch((err) => dispatch(postReviewFailure(err.message)));
  };
};

const { actions, reducer: postReviewReducer } = postReviewSlice;
// Extract and export each action creator by name
export const { postReview, postReviewSuccess, postReviewFailure } = actions;
// Export the reducer, either as a default or named export
export default postReviewReducer;

export const postReviewSelector = (state) => state.postReview;
