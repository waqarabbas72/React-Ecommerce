import { createSlice } from '@reduxjs/toolkit'

const clothingSlice = createSlice({
    name: "secondData",
    initialState: {
        clothingData: []
    },
    reducers: {
        clothesProducts(state, action) {
            state.clothingData = action.payload
        }
    }
});

export const { clothesProducts } = clothingSlice.actions;
export default clothingSlice.reducer;
