import {SET_SEARCH_TEXT, SET_SEARCH_TYPE, REQUEST_MOVIES, SHOW_MOVIES, SORT_MOVIES_BY_DATE, SORT_MOVIES_BY_RATE} from '../constants/constants';
import MovieItems from '../reducers/MovieItems';

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
export const requestMovies = () => {
    return {
        type: REQUEST_MOVIES
    }
};
export const sortMoviesByDate = () => {
    return {
        type: SORT_MOVIES_BY_DATE,
    }
};
export const sortMoviesByRate = () => {
    return {
        type: SORT_MOVIES_BY_RATE,
    }
};
export const showMovies = () => {
   return dispatch => {
       setTimeout(() => {
           dispatch({
               type: SHOW_MOVIES,
               payload: MovieItems
           })
       }, 1000)
   }
};