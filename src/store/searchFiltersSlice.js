import { createSlice } from "@reduxjs/toolkit";
import { initialSearchFilters } from "../constants";

const initialUserFilters = {
    search: "",
    category: "all",
    colors: "all",
    company: "all",
    price: "",
    shipping: false
};

const initialState = {
    searchFilters: initialSearchFilters,
    userFilters: initialUserFilters,
    maxPrice: ""
};

const searchFiltersSlice = createSlice({
    name: 'searchFilters',
    initialState,
    reducers: {
        setSearchFilters: (state, action) => {
            state.searchFilters = action.payload;
        },
        updateSearchFilters: (state, action) => {
            state.userFilters = action.payload;
        },
        firstSetUserFilters: (state, action) => {
            state.userFilters = { ...initialUserFilters, price: action.payload };
        },
        setMaxPrice: (state, action) => {
            state.maxPrice = action.payload;
        },
        resetFilters: (state, action) => {
            state.userFilters = { ...initialUserFilters, price: action.payload };
        }
    }
});

export const searchFiltersActions = searchFiltersSlice.actions;

export default searchFiltersSlice.reducer;