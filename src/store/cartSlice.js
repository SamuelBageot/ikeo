import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    nbOfItems: 0,
    subtotal: 0,
    shippingFee: 50
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    }
})

export default cartSlice.reducer;