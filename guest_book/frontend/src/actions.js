import {
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  ADD_REVIEW_STARTED,
} from "./actionTypes";
import URLS from "./conf";
import axios from "axios";

export const addReview = (formData) => {
  return (dispatch) => {
    dispatch(addReviewStarted());

    axios
      .post(URLS.reviews, formData)
      .then((res) => {
        dispatch(addReviewSuccess(res.data));
      })
      .catch((err) => {
        dispatch(addReviewFailure(err.message));
      });
  };
};

const addReviewStarted = () => ({
  type: ADD_REVIEW_STARTED,
});

const addReviewSuccess = (review) => ({
  type: ADD_REVIEW_SUCCESS,
  payload: {
    ...review,
  },
});

const addReviewFailure = (error) => ({
  type: ADD_REVIEW_FAILURE,
  payload: {
    error,
  },
});
