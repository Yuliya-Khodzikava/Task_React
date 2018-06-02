import { combineReducers } from 'redux';

import MovieItems from './MovieItems';
import filterItems from './filterItems';

export default combineReducers({
	movies: MovieItems,
	search: filterItems
})