import { combineReducers } from "redux";
import charactersReducer from './charactersReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    charactersReducer,
    searchReducer,
})