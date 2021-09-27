import { combineReducers } from "redux";
import articlesReducer from '../articles'
import tagsReducer from '../tags';
import commentsReducer from '../comments';

export default combineReducers({
    articles: articlesReducer,
    tags: tagsReducer,
    comments: commentsReducer
})