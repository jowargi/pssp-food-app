import { configureStore } from "@reduxjs/toolkit";
import { restaurantsApi } from "./api/restaurants/api";

export const store = configureStore({
  reducer: {
    [restaurantsApi.reducerPath]: restaurantsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(restaurantsApi.middleware),
});
