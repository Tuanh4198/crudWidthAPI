
// reducers/index.jsjs
import { combineReducers } from 'redux';
import fetchNoteReducer from './crudNoteReducer/fetchNoteReducer';

const reducers = combineReducers({
	notes: fetchNoteReducer,
});

export default (state, action) => reducers(state, action);