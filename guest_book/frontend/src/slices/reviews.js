import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  reviews: [],
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
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

// Three actions generated from the slice
export const {
  getReviews,
  getReviewsSuccess,
  getReviewsFailure,
  postReview,
  postReviewSuccess,
  postReviewFailure,
} = postsSlice.actions;

// A selector
export const reviewsSelector = (state) => state.reviews;

// The reducer
export default reviewsSlice.reducer;

// Asynchronous thunk action
/*
export function fetchReviews() {
  return async (dispatch) => {
    dispatch(getReviews());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts" //
      );
      const data = await response.json();

      dispatch(getReviewsSuccess(data));
    } catch (error) {
      dispatch(getReviewsFailure());
    }
  };
}
*/

export const getReviews = () => {
  return async (dispatch) => {
    dispatch(getReviews());

    axios
      .get(URLS.review)
      .then((res) => dispatch(getReviewsSuccess(res.data)))
      .catch((err) => dispatch(getReviewsFailure(err.message)));
  };
};

export const addReview = (formData) => {
  return async (dispatch) => {
    dispatch(postReview());

    axios
      .post(URLS.reviews, formData)
      .then((res) => dispatch(postReviewSuccess(res.data)))
      .catch((err) => dispatch(postReviewFailure(err.message)));
  };
};
