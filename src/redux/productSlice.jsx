import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [], // Corrected 'product' to 'products' to match the reducer
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload; // Assigning to 'products' as per the initialState
        },
    },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
