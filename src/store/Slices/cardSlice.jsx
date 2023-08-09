import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({

    name: 'card',
    initialState: {
        apiData: [],
        showCart: false,
        productQuickview: false,
        productId: '',
        cartData : []
    },
    reducers: {
        products(state, action) {
            state.apiData = action.payload;
        },
        controlCart(state) { 
            state.showCart = !state.showCart
        },
        quickView(state ){
            state.productQuickview = !state.productQuickview
        },
        fetchProductId(state, action){
            state.productId = action.payload
        },
        addToCart(state , action){
            state.cartData.push(action.payload)
        }
        
    }
})

export const { products, controlCart, quickView, fetchProductId , addToCart } = cardSlice.actions;
export default cardSlice.reducer;
