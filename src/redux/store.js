import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/Slices/cartSlice";

const store = configureStore({
    reducer : {
        cart : cartReducer,
    }
});

export default store;
