export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const SET_SEARCH_TYPE = 'SET_SEARCH_TYPE';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export const setSearchText = (searchText) => {
    return {
        type: SET_SEARCH_TEXT,
        payload: searchText
    }
};
export const setSearchType = (searchType) => {
    return {
        type: SET_SEARCH_TYPE,
        payload: searchType
    }
};
export const requestMovies = (searchText, searchField) => {
    return {
        type: REQUEST_MOVIES,
        payload: {
            searchText,
            searchField
        }
    }
};
export const receiveMovies = (searchResult) => {
    return {
        type: RECEIVE_MOVIES,
        payload: searchResult
    }
};
export const getMovies = (searchText, searchField) => {
  return dispatch => {
    dispatch(requestMovies(searchText, searchField))
    return fetch(`https:localhost:8080`)
          .then(searchResult => dispatch(receiveMovies(searchResult)))
  }
};