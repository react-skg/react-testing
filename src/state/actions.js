import * as types from "./types";

export const asyncFetchShowsRequest = () => ({
  type: types.ASYNC_FETCH_POPULAR_SHOWS_REQUEST
});

export const asyncFetchShowsSuccess = shows => ({
  type: types.ASYNC_FETCH_POPULAR_SHOWS_SUCCESS,
  shows
});

export const asyncFetchShowsError = error => ({
  type: types.ASYNC_FETCH_POPULAR_SHOWS_ERROR,
  error
});

export const asyncFetchShows = () => {
  return dispatch => {
    dispatch(asyncFetchShowsRequest());

    return fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1&language=en-US&api_key=ccd7f7c8bc4f625411a4e4925c0c5931"
    )
      .then(response => {
        return response.text();
      })
      .then(body => {
        const data = JSON.parse(body);
        dispatch(asyncFetchShowsSuccess(data.results));
      });
  };
};

export const fetchShowRequest = () => ({
  type: types.ASYNC_FETCH_SHOW_REQUEST
});

export const fetchShowSuccess = show => ({
  type: types.ASYNC_FETCH_SHOW_SUCCESS,
  show
});

export const fetchShowError = error => ({
  type: types.ASYNC_FETCH_SHOW_ERROR,
  error
});

export const asyncFetchShow = id => {
  return dispatch => {
    dispatch(fetchShowRequest());

    return fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=ccd7f7c8bc4f625411a4e4925c0c5931`
    )
      .then(response => {
        return response.text();
      })
      .then(body => {
        const data = JSON.parse(body);
        dispatch(fetchShowSuccess(data));
      });
  };
};

export const asyncFetchTrailerRequest = () => ({
  type: types.ASYNC_FETCH_TRAILER_REQUEST
});

export const asyncFetchTrailerSuccess = trailerId => ({
  type: types.ASYNC_FETCH_TRAILER_SUCCESS,
  trailerId
});

export const asyncFetchTrailerError = error => ({
  type: types.ASYNC_FETCH_TRAILER_ERROR,
  error
});

export const asyncFetchTrailer = id => {
  return dispatch => {
    dispatch(asyncFetchTrailerRequest());

    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=ccd7f7c8bc4f625411a4e4925c0c5931`
    )
      .then(response => {
        return response.text();
      })
      .then(body => {
        const data = JSON.parse(body);
        if (data.results && data.results.length > 0) {
          dispatch(asyncFetchTrailerSuccess(data.results[0].key));
        } else {
          dispatch(asyncFetchTrailerSuccess(""));
        }
      });
  };
};
