import reviewsReducer from "./listReviews";
import postReviewReducer from "./postNewReview";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reviewsReducer,
  postReviewReducer,
});

export default rootReducer;
//at this point this step does simply nothing.
//But for app scaling and adding new features and pages it would be perfect
