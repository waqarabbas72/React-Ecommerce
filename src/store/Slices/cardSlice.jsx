import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";



const cardSlice = createSlice({
    name: 'card',
    initialState: {
        apiData: [],
        showCart: false,
        productQuickview: false,
        productId: '',
        cartData: []
    },
    reducers: {
        products(state, action) {
            state.apiData = action.payload;
        },
        controlCart(state) {
            state.showCart = !state.showCart
        },
        quickView(state) {
            state.productQuickview = !state.productQuickview
        },
        fetchProductId(state, action) {
            state.productId = action.payload
        },
        addToCart(state, action) {
         
            const mulItems = { ...action.payload, quantity: 1 }
            state.cartData.push(mulItems)
        },
        removeItem(state, action) {
            let updatedData = state.cartData.filter((currentEl) => currentEl.id != action.payload)
            return {
                ...state,
                cartData: updatedData
            }
        },
        increaseItem(state, action) {
            const incIndex = state.cartData.findIndex((item) => item.id === action.payload.id)
            if (state.cartData[incIndex].quantity > 0) {
                state.cartData[incIndex].quantity += 1
            }
        },
        decreaseItem(state, action) {
            const incIndex = state.cartData.findIndex((item) => item.id === action.payload.id)
            if (state.cartData[incIndex].quantity >= 1) {
                state.cartData[incIndex].quantity -= 1
            } else if (state.cartData[incIndex].quantity === 1) {
                const nextData = state.cartData.filter((item) => item.id !== action.payload.id)
                state.apiData = nextData
            }

        },
        clearCart(state) {
            return {
                ...state,
                cartData: []
            }
        },
    },
})

export const { products, controlCart, quickView, fetchProductId, addToCart, removeItem, clearCart, increaseItem, decreaseItem } = cardSlice.actions;
export default cardSlice.reducer;
