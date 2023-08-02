import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        apiData: []
    },
    reducers: {
        products(state, action) {
            state.apiData = action.payload;
        }
    }
})

export const { products } = cardSlice.actions;
export default cardSlice.reducer;
