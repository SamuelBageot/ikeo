import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import searchFiltersSlice from "./searchFiltersSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        searchFilters: searchFiltersSlice,
        cartSlice: cartSlice
    }
});

export default store;