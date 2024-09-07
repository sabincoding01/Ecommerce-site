import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    product: [],

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
       
    },
})


export default cartSlice.reducer