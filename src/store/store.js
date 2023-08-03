import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./Slices/cardSlice";
import { fashionApi } from "../fashionApi";
import { clothingApi } from "../clothingApi";
// ...

const store = configureStore({
  reducer: {
    card: cardSlice,
    [fashionApi.reducerPath] : fashionApi.reducer,
    [clothingApi.reducerPath] : clothingApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(fashionApi.middleware, clothingApi.middleware),
});

export default store;
