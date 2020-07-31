import {
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_STARTED,
  ADD_REVIEW_FAILURE,
} from "./actionTypes";

const INITIAL_STATE = [];

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_REVIEW_SUCCESS:
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
      return; // TODO
    case ADD_REVIEW_FAILURE:
      return; // TODO
    default:
      return state;
  }
};

export default rootReducer;
