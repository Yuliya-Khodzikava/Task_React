import { combineReducers } from 'redux';

//import MovieItems from './MovieItems';
import filterItems from './filterItems';
//import sortingMovies from './sortingMovies';

//export default combineReducers({
//	//movies: MovieItems,
//	show: filterItems,
//	//sortingMovies
//})

const allReducers = combineReducers({
    //movies: MovieItems,
	items: filterItems
});

export default allReducers;