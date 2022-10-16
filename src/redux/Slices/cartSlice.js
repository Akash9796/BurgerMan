import { useState } from "react";

const { createSlice, current } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  subTotal: 0,
  tax: 0,
  shippingCharges: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      console
        .log
        // state.cartItems?.findIndex((item) => item.id === action.payload.id)
        ();
      const itemIndex = state.cartItems?.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    remove(state, action) {
      const leftCartItems = state.cartItems.filter(
        (i) => i.id !== action.payload.id
      );
      state.cartItems = leftCartItems;
    },

    increaseCount(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].cartQuantity += 1;
    },
    decreaseCount(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].cartQuantity -= 1;
    },
    calculate(state) {
      let temp = 0;
      state.subTotal = current(state)
        .cartItems.map((i) => {
          return (temp +=
            (!isNaN(i.addresses[0].number) ? i.addresses[0].number : 500) *
            i.cartQuantity);
        })
        .pop();
      state.tax = state.subTotal * 0.18;
      state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
      state.total = state.subTotal + state.tax + state.shippingCharges;
    },
  },
});

export const { add, remove, increaseCount, decreaseCount, calculate } =
  cartSlice.actions;
export default cartSlice.reducer;
