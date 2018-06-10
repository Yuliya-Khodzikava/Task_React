import { combineReducers } from 'redux';

import filterItems from './filterItems';

const allReducers = combineReducers({
	items: filterItems
});

export default allReducers;