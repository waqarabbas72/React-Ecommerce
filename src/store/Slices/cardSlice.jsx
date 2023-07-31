import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        apiData: []
    },
    reducers: {
        categories(state, action) {
            state.apiData = action.payload;
        }
    }
})

export const { categories } = cardSlice.actions;
export default cardSlice.reducer;