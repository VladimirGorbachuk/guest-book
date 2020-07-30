import { createStore } from "redux";
import reviewApp from "./reducers";

const store = createStore(reviewApp);

export default store;
