import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer as tvShows } from "./reducer";

const showDevTools =
  typeof window !== "undefined"
    ? window.devToolsExtension && process.env.NODE_ENV !== "production"
    : false;

const store = createStore(
  tvShows,
  compose(
    applyMiddleware(thunk),
    showDevTools ? window.devToolsExtension() : f => f
  )
);

export default store;
