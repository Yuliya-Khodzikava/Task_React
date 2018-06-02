const initialState = {
    searchText: '',
    searchType: 'title',
    searchResult: []
};

export const filterItems = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.payload
            };
        case 'SET_SEARCH_TYPE':
            return {
                ...state,
                searchType: action.payload
            };
        case 'REQUEST_MOVIES':
            return {
                ...state,
                query: action.payload
            };
        case 'RECEIVE_MOVIES':
            return {
                ...state,
                searchResult: action.payload
            };
        default:
            return state;
    }
}