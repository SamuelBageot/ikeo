import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import searchFiltersSlice from "./searchFiltersSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        searchFilters: searchFiltersSlice
    }
});

export default store;