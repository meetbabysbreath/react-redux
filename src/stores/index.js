import {createStore,combineReducers} from 'redux';
import reducers from 'reducers';
const initState = {};
const store = createStore(combineReducers(reducers),initState);
export default store;