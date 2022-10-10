import { createSlice } from '@reduxjs/toolkit'

export const Order = createSlice({
  name: 'getOrder',
  initialState: {
    createOrderData:'',
    uploads: [],
    myOrders: ''
  },
  reducers: {
    SAVE_ORDER: (state, action) => {
      state.createOrderData = action.payload
    },
    SAVE_FILES: (state , action) => {
      state.uploads = action.payload
    },
    GET_ALL_ORDERS: (state, action) => {
      state.myOrders = action.payload
    }
  }
})
// Action creators are generated for each case reducer function
export const { SAVE_ORDER , SAVE_FILES , GET_ALL_ORDERS } = Order.actions
const OrderData = Order.reducer
export default OrderData