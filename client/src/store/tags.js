import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "tags",
    initialState: [],
    reducers: {
        tagAdded: (tags, action) => {
            tags.push({
                id: 1,
                name: action.payload.name
            })
        },

        tagRemoved: (tags, action) => {
            tags.filter(tag => tag.id !== action.payload.id)
        }
    }
})
export const { tagAdded, tagRemoved } = slice.actions
export default slice.reducer