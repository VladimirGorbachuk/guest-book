import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import URLS from "../conf";

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    loading: false,
    hasErrors: false,
    reviews: [],
  },
  reducers: {
    getReviews: (state) => {
      state.loading = true;
    },
    getReviewsSuccess: (state, { payload }) => {
      state.reviews = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getReviewsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const fetchReviews = () => {
  return async (dispatch) => {
    dispatch(getReviews());

    axios
      .get(URLS.reviews)
      .then((res) => dispatch(getReviewsSuccess(res.data)))
      .catch((err) => dispatch(getReviewsFailure(err.message)));
  };
};

const { actions, reducer: reviewsReducer } = reviewsSlice;

export const { getReviews, getReviewsSuccess, getReviewsFailure } = actions;

export default reviewsReducer;
export const reviewsSelector = (state) => state.reviewsReducer;
