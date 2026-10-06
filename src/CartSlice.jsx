import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload
      const existing = state.items.find((it) => it.name === plant.name)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...plant, quantity: 1 })
      }
    },

    removeItem: (state, action) => {
      const name = action.payload
      state.items = state.items.filter((it) => it.name !== name)
    },

    increaseQuantity: (state, action) => {
      const name = action.payload
      const existing = state.items.find((it) => it.name === name)
      if (existing) {
        existing.quantity += 1
      }
    },

    decreaseQuantity: (state, action) => {
      const name = action.payload
      const existing = state.items.find((it) => it.name === name)
      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1
        } else {
          state.items = state.items.filter((it) => it.name !== name)
        }
      }
    },

    clearCart: (state) => {
      state.items = []
    },
  },
})

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions

export const selectCartItems = (state) => state.cart.items

export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)

export const selectTotalAmount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity * item.cost, 0)

export default cartSlice.reducer