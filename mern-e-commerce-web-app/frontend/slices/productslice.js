import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    error: null
};

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        productlistreq: (state) => {
            state.products = [];
        },
        productlistsuccess: (state, action) => {
            state.products = action.payload;
        },
        productlistfail: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { productlistreq, productlistsuccess, productlistfail } = productSlice.actions;
export default productSlice.reducer;
