import axios from "axios";

export const postReview = (url, body) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(body),
  });

export const getReviews = (url) => fetch(url);
/* in future it may be good idea to get only latest reviews. 
however at the moment it is not relevant */
