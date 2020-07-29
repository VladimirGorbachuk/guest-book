import ADD_REVIEW from "actionTypes";

export function addReview(name, message, image) {
  return { type: ADD_REVIEW, name, message, image };
}
