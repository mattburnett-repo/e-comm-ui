/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartItem, CartState } from './Types'

const initialState: CartState = {
  cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.cartItems.find(
        (cartItem) => cartItem.product_id === action.payload.product_id
      )

      if (item) {
        item.productQuantity += action.payload.productQuantity
      } else {
        state.cartItems.push(action.payload)
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      // eslint-disable-next-line no-param-reassign
      state.cartItems = state.cartItems.filter(
        (item) => item.product_id !== action.payload.product_id
      )
    },
    resetCart: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.cartItems = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions

export default cartSlice.reducer
