import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  cartTotal: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const exists = state.items.filter(
        (item) => item.title === action.payload.title
      )
      if (exists.length === 1) {
        for (const item of state.items) {
          if (item.title === action.payload.title) {
            item.quantity = item.quantity + 1
            item.total = item.total + item.price
            state.cartTotal += item.price
            break
          }
        }
      } else {
        state.items.push(action.payload)
        state.cartTotal += action.payload.price
      }
    },
    decreaseQuantity(state, action) {
      for (let item of state.items) {
        if (item.title === action.payload.title) {
          item.quantity = item.quantity - 1
          item.total = item.total - item.price
          state.cartTotal = state.cartTotal - item.price
          if (item.quantity === 0) {
            item = {}
          }
        }
      }
    },
  },
})

export default cartSlice.reducer

export const cartActions = cartSlice.actions
