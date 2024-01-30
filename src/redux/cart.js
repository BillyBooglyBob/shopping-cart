import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
  }
})

export const { addItem, deleteItem } = cartSlice.actions

export default cartSlice.reducer