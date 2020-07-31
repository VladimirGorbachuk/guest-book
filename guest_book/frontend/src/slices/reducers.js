import {
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_STARTED,
  ADD_REVIEW_FAILURE,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_STARTED,
  GET_REVIEWS_FAILURE,
} from "../actionTypes";

const INITIAL_STATE = [];

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_REVIEW_SUCCESS:
      state.sendingReview = false;
      return Object.assign({}, state, {
        reviews: [
          ...state.reviews,
          {
            name: action.name,
            message: action.message,
            image: action.image,
          },
        ],
      });
    case ADD_REVIEW_STARTED:
      alert("adding review");
      state.sendingReview = true;
      return; // TODO: call upload in progess function
    case ADD_REVIEW_FAILURE:
      state.sendingReview = false;
      alert("review added successfully");
      return; // TODO: call alert function
    case GET_REVIEWS_SUCCESS:
      state.gettingReviews = false;
      return Object.assign({}, state, {
        reviews: [
          ...state.reviews,
          {
            name: action.name,
            message: action.message,
            image: action.image,
          },
        ],
      });
    case GET_REVIEWS_STARTED:
      alert("getting reviews");
      state.gettingReviews = true;
      state.hasErrors = false;
      return; // TODO: call upload in progess function
    case GET_REVIEWS_FAILURE:
      state.hasErrors = true;
      state.gettingReviews = false;
      alert("review added successfully");
      return; // TODO: call alert function
    default:
      return state;
  }
};

export default rootReducer;
