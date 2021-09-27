import { combineReducers } from "redux";
import articlesReducer from '../articles'
import tagsReducer from '../tags';

export default combineReducers({
    articles: articlesReducer,
    tags: tagsReducer
})