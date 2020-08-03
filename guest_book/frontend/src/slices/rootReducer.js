import reviewsReducer from "./listReviews";
import postReviewReducer from "./postNewReview";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reviewsReducer,
  postReviewReducer,
});

export default rootReducer;
