import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;

      // Check if the item already exists in the cart
      const existingItem = state.products.find(item => item && item.id === id);

      if (existingItem) {
        // If the item exists, update the quantity
        existingItem.quantity += quantity;
      } else {
        // If the item doesn't exist, add it to the cart
        state.products.push(action.payload);
      }
    },

    removeItem: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(item => item && item.id !== productId);
    },

    resetCart: (state) => {
      state.products = [];
    },
  },
});


// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
