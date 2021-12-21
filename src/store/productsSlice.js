import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    filteredProducts: []
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;