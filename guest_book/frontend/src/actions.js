import {
  ADD_REVIEW_STARTED,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  GET_REVIEWS_STARTED,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAILURE,
} from "./actionTypes";
import URLS from "./conf";
import axios from "axios";

export const addReview = (formData) => {
  return (dispatch) => {
    dispatch(addReviewStarted());

    axios
      .post(URLS.reviews, formData)
      .then((res) => dispatch(addReviewSuccess(res.data)))
      .catch((err) => dispatch(addReviewFailure(err.message)));
  };
};

export const getReviews = () => {
  return (dispatch) => {
    dispatch(getReviewsStarted());

    axios
      .get(URLS.review)
      .then((res) => dispatch(getReviewsSuccess(res.data)))
      .catch((err) => dispatch(getReviewsFailure(err.message)));
  };
};

export const addReviewStarted = () => ({
  type: ADD_REVIEW_STARTED,
});

export const addReviewSuccess = (review) => ({
  type: ADD_REVIEW_SUCCESS,
  payload: {
    ...review,
  },
});

export const addReviewFailure = (error) => ({
  type: ADD_REVIEW_FAILURE,
  payload: {
    error,
  },
});

export const getReviewsStarted = () => ({
  type: GET_REVIEWS_STARTED,
});

export const getReviewsSuccess = (review) => ({
  type: GET_REVIEWS_SUCCESS,
  payload: {
    ...review,
  },
});

export const getReviewsFailure = (error) => ({
  type: GET_REVIEWS_FAILURE,
  payload: {
    error,
  },
});
