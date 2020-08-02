import React from "react";
import ListReviews from "./pages/ListReviews";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/rootReducer";

const store = configureStore({ reducer: rootReducer });

const App = () => (
  <Provider store={store}>
    <div>
      <ListReviews />
    </div>
  </Provider>
);

export default App;
