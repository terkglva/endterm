import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/itemsSlice";
import favoritesReducer from "./features/favoritesSlice"; // ✅ ADD THIS

const store = configureStore({
  reducer: {
    items: itemsReducer,
    favorites: favoritesReducer, // ✅ ADD THIS
  },
});

export default store;