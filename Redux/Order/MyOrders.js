import { createSlice } from '@reduxjs/toolkit'

export const MyOrders = createSlice({
  name: 'getOrder',
  initialState: {
    page: 1,
    data: null
  },
  reducers: {
    GET_PAGE: (state, action) => {
      state.page = action.payload
    },
    GET_DATA: (state, action) => {
        state.data = action.payload
    }
  }
})
// Action creators are generated for each case reducer function
export const { GET_PAGE } = MyOrders.actions
const MyOrdersData = MyOrders.reducer
export default MyOrdersData