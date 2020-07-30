import addReview from "./actions/actions.js";
import ADD_REVIEW from "./actions/actionTypes.js";

const INITIAL_STATE = [];

function reviewApp(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_REVIEW:
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
    default:
      return state;
  }
}

export default reviewApp;
