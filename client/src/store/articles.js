import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./actions";
import moment from 'moment'

const slice = createSlice({
    name: "articles",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        articlesRequested: (articles, action) => {
            articles.loading = true;
        },

        articlesRequestFailed: (articles, action) => {
            articles.loading = false;
        },

        articlesRecieved: (articles, action) => {
            articles.list = action.payload;
            articles.loading = false;
            articles.lastFetch = Date.now()
        },

        articleAdded: (articles, action) => {
            articles.list.push({
                id: 1,
                author: action.payload.author,
                outlet: action.payload.outlet,
                title: action.payload.title,
                content: action.payload.content,
            })
        },

        articleRemoved: (articles, action) => {
            articles.list.filter(article => article.id !== action.payload.id)
        }
    }
})

export const { articleAdded, articleRemoved, articlesRecieved, articlesRequested, articlesRequestFailed } = slice.actions
export default slice.reducer


export const loadArticles = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.articles;

    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
    if (diffInMinutes < 2) return;

    dispatch(
        apiCallBegan({
            url: "/articles",
            onStart: articlesRequested.type,
            onSuccess: articlesRecieved.type,
            onError: articlesRequestFailed.type
        }))
}



