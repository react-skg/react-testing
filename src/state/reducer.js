import * as types from "./types";

const initialState = {
  shows: [],
  show: {},
  trailerId: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ASYNC_FETCH_POPULAR_SHOWS_SUCCESS:
      return {
        ...state,
        shows: action.shows
      };
    case types.ASYNC_FETCH_SHOW_SUCCESS:
      return {
        ...state,
        show: action.show
      };
    case types.ASYNC_FETCH_TRAILER_SUCCESS:
      return {
        ...state,
        trailerId: action.trailerId
      };
    default:
      return state;
  }
};
