import { createSlice } from '@reduxjs/toolkit'

export const Order = createSlice({
  name: 'getOrder',
  initialState: {
    createOrderData:'',
    uploads: []
  },
  reducers: {
    SAVE_ORDER: (state, action) => {
      state.createOrderData = action.payload
    },
    SAVE_FILES: (state , action) => {
      state.uploads = action.payload
    }
  }
})
// Action creators are generated for each case reducer function
export const { SAVE_ORDER , SAVE_FILES } = Order.actions
const OrderData = Order.reducer
export default OrderData