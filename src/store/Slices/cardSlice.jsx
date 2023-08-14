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
        cartItemsQuantity: 0,
        cartItemsSubtotal: 0
    },
    reducers: {
        products(state, action) {
            state.apiData = action.payload;
        },
        controlCart(state) {
            state.showCart = !state.showCart
            const initialCartData = JSON.parse(localStorage.getItem('cartData')) || []; //Get Data from Localstorage
            state.cartData = initialCartData
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
                state.cartData[existingItemIndex].subtotal = state.cartData[existingItemIndex].quantity * state.cartData[existingItemIndex].price; //Update Subtotal of Each Item
            } else {
                state.cartData.push({ ...action.payload, quantity: 1, subtotal: action.payload.price });
            }
            localStorage.setItem('cartData', JSON.stringify(state.cartData)) //UpDate Data in LocalStorage
        },
        removeItem(state, action) {
            state.cartData = state.cartData.filter(item => item.id !== action.payload);
            localStorage.setItem('cartData', JSON.stringify(state.cartData));  //UpDate Data in LocalStorage
        },
        increaseItem(state, action) {
            const itemsToIncrease = state.cartData.find(item => item.id === action.payload.id);
            if (itemsToIncrease) {
                itemsToIncrease.quantity += 1;
                itemsToIncrease.subtotal = itemsToIncrease.quantity * itemsToIncrease.price;//Update Subtotal of Each Item
                localStorage.setItem('cartData', JSON.stringify(state.cartData)); //UpDate Data in LocalStorage
            }
        },
        decreaseItem(state, action) {
            const itemsToDecrease = state.cartData.findIndex((item) => item.id === action.payload.id)
            if (state.cartData[itemsToDecrease].quantity > 1) {
                state.cartData[itemsToDecrease].quantity -= 1
                state.cartData[itemsToDecrease].subtotal = state.cartData[itemsToDecrease].quantity * state.cartData[itemsToDecrease].price; //Update Subtotal of Each Item
            } else if (state.cartData[itemsToDecrease].quantity === 1) {
                const nextData = state.cartData.filter((item) => item.id !== action.payload.id)
                state.cartData = nextData
            }
            localStorage.setItem('cartData', JSON.stringify(state.cartData)); //UpDated Data in LocalStorage
        },
        clearCart(state) {
            localStorage.removeItem('cartData')
            state.cartData = []
        },
        itemsInCart(state) {
            let cartQuantity = state.cartData.reduce((initialVal, currentVal) => {
                const { quantity } = currentVal
                return initialVal + quantity;
            }, 0)

            state.cartItemsQuantity = cartQuantity
        },
        calculateCartSubtotal(state) {
            state.cartItemsSubtotal = state.cartData.reduce((subtotal, item) => subtotal + item.subtotal, 0);

        }
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
    itemsInCart,
    calculateCartSubtotal
} = cardSlice.actions;

export default cardSlice.reducer;
