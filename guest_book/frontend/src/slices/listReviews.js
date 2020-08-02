import { createSlice } from "@reduxjs/toolkit";

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

export const fetchReviews = () => {
  return async (dispatch) => {
    dispatch(getReviews());

    axios
      .get(URLS.review)
      .then((res) => dispatch(getReviewsSuccess(res.data)))
      .catch((err) => dispatch(getReviewsFailure(err.message)));
  };
};

const { actions, reducer: reviewsReducer } = reviewsSlice;
// Extract and export each action creator by name
export const { getReviews, getReviewsSuccess, getReviewsFailure } = actions;
// Export the reducer, either as a default or named export
export default reviewsReducer;

// A selector
export const reviewsSelector = (state) => state.reviews;
