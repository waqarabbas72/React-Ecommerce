import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({

    name: 'card',
    initialState: {
        apiData: [],
        showCart: false
    },
    reducers: {
        products(state, action) {
            state.apiData = action.payload;
        },
        controlCart(state, action) {
            state.showCart = !state.showCart
        }
    }
})

export const { products, controlCart } = cardSlice.actions;
export default cardSlice.reducer;
