import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./Slices/cardSlice";
import { fashionApi } from "../fashionApi";
// ...

const store = configureStore({
  reducer: {
    card: cardSlice,
    [fashionApi.reducerPath] : fashionApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(fashionApi.middleware),
});

export default store;
