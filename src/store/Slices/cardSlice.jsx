import { createSlice, current } from "@reduxjs/toolkit";
import { useEffect } from "react";



const cardSlice = createSlice({
    name: 'card',
    initialState: {
        apiData: [],
        showCart: false,
        productQuickview: false,
        productId: '',
        cartData: [],
        cartItemsQuantity: 0
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
            const existingItemIndex = state.cartData.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                state.cartData[existingItemIndex].quantity += 1;
            } else {
                state.cartData.push({ ...action.payload, quantity: 1 });
            }
        },
        itemsInCart(state) {
            let cartQuantity = state.cartData.reduce((initialVal, currentVal) => {
                const { quantity } = currentVal
                return initialVal + quantity;
            }, 0)

            state.cartItemsQuantity = cartQuantity

        },
        removeItem(state, action) {
            state.cartData = state.cartData.filter(item => item.id !== action.payload);
        },
        increaseItem(state, action) {
            const itemsToIncrease = state.cartData.find(item => item.id === action.payload.id);
            if (itemsToIncrease) {
                itemsToIncrease.quantity += 1;
            }
        },
        decreaseItem(state, action) {
            const itemsToDecrease = state.cartData.findIndex((item) => item.id === action.payload.id)
            if (state.cartData[itemsToDecrease].quantity > 1) {
                state.cartData[itemsToDecrease].quantity -= 1
            } else if (state.cartData[itemsToDecrease].quantity === 1) {
                const nextData = state.cartData.filter((item) => item.id !== action.payload.id)
                state.cartData = nextData
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

export const {
    products,
    controlCart,
    quickView,
    fetchProductId,
    addToCart,
    removeItem,
    clearCart,
    increaseItem,
    decreaseItem,
    itemsInCart } = cardSlice.actions;

export default cardSlice.reducer;
