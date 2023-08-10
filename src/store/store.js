import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./Slices/cardSlice";
import { clothingApi } from "../clothingApi";
// ...

const store = configureStore({
  reducer: {
    card: cardSlice,
    [clothingApi.reducerPath] : clothingApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat( clothingApi.middleware),
});

export default store;
