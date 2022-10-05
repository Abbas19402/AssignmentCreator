import { createSlice } from '@reduxjs/toolkit'

export const Order = createSlice({
  name: 'getOrder',
  initialState: {
    createOrderData:'',
  },
  reducers: {
    SAVE_ORDER: (state, action) => {
      state.createOrderData = action.payload
    },
  }
})
// Action creators are generated for each case reducer function
export const { SAVE_ORDER } = Order.actions
const OrderData = Order.reducer
export default OrderData