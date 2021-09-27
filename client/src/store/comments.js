import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "comments",
    initialState: {
        list: [],
        loading: false
    },
    reducers: {
        commentAdded: (comments, action) => {
            comments.list.push({
                userId: action.payload.userId,
                articleId: action.payload.articleId,
                text: action.payload.text
            })
        },

        commentRemoved: (comments, action) => {
            comments.list.filter(comment => comment.id !== action.payload.id)
        }
    }
})


export const { commentAdded, commentRemoved } = slice.actions
export default slice.reducer