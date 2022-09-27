import { createSlice } from '@reduxjs/toolkit'

export const States = createSlice({
  name: 'StateManager',
  initialState: {
    ssrData:''
  },
  reducers: {
    getSSR: (state, action) => {
      state.ssrData = action.payload
    },
  }
})
// Action creators are generated for each case reducer function
export const { getSSR } = States.actions
const GetSSRProps = States.reducer
export default GetSSRProps