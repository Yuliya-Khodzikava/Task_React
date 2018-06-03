import {SET_SEARCH_TEXT, SET_SEARCH_TYPE, REQUEST_MOVIES, SHOW_MOVIES, SORT_MOVIES_BY_DATE, SORT_MOVIES_BY_RATE} from '../constants/constants';

const initialState = {
    searchText: '',
    searchType: 'title',
    searchResult: [],
    movies: []
};

const filterItems = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            };
        case SET_SEARCH_TYPE:
            return {
                ...state,
                searchType: action.payload
            };
        case REQUEST_MOVIES:
            return {
                ...state,
                searchResult: state.movies.filter( item => {
                   return item[state.searchType].toLowerCase().indexOf(state.searchText.toLowerCase()) !== -1;
               })
            };
        case SHOW_MOVIES:
            return {
                ...state,
                movies: action.payload,
                searchResult: action.payload
            };
        case SORT_MOVIES_BY_DATE:
            return {
                ...state,
                searchResult: state.searchResult.sort( (a,b) => {
                    return a.date > b.date;
                })
            };
        case SORT_MOVIES_BY_RATE:
            return {
                ...state,
                searchResult: state.searchResult.sort( (a,b) => {
                    return a.rating > b.rating;
                })
            };
        default:
            return state;
    }
}
export default filterItems;