import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    filteredProducts: []
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch('https://ikeo-production.herokuapp.com/products');
        const data = await response.json();
        return data;
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
        })
    }
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;