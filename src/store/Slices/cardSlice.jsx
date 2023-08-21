import { createSlice } from "@reduxjs/toolkit";



const cardSlice = createSlice({
    name: 'card',
    initialState: {
        apiData: [],
        showCart: false,
        productQuickview: false,
        productId: '',
        cartData: JSON.parse(localStorage.getItem('cartData')) || [],
        cartItemsQuantity: 0,
        cartItemsSubtotal: 0
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
                state.cartData.push({ ...action.payload, quantity: 1, });
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
                localStorage.setItem('cartData', JSON.stringify(state.cartData)); //UpDate Data in LocalStorage
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
            localStorage.setItem('cartData', JSON.stringify(state.cartData)); //UpDated Data in LocalStorage
        },
        clearCart(state) {
            localStorage.removeItem('cartData')
            localStorage.removeItem('cartItemsQuantity')
            state.cartData = []
            state.cartItemsQuantity = 0
        },
        itemsInCart(state) {
            let cartQuantity = state.cartData.reduce((initialVal, currentVal) => {
                const { quantity } = currentVal
                return initialVal + quantity;
            }, 0)
            state.cartItemsQuantity = cartQuantity;
            // Update the cartItemsQuantity in localStorage
            localStorage.setItem("cartItemsQuantity", cartQuantity.toString());
        },
        getTotal(state) {
            const { price, itemQuantity } = state.cartData.reduce((totalItem, cartItems) => {
                const { quantity } = cartItems;
                const { price } = cartItems;
                const itemTotal = price * quantity;
                totalItem.price += itemTotal
                totalItem.itemQuantity += quantity

                return totalItem

            }, {
                price: 0,
                itemQuantity: 0
            })

            state.cartItemsSubtotal = price
            state.cartItemsQuantity = itemQuantity
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
    itemsInCart,
    getTotal,
    getCartQuantity
} = cardSlice.actions;

export default cardSlice.reducer;
