import { createSlice } from '@reduxjs/toolkit'



export const User = createSlice({
  name: 'userAuthentication',
  initialState: {
    user:'Websenor'
  },
  reducers: {
    SAVE_USER: (state, action) => {
      state.user = action.payload
    },
    DELETE_USER: ( state , action ) => {
      state.user = {}
    }
  }
})
// console.log(User.reducer);

// Action creators are generated for each case reducer function
export const { SAVE_USER , DELETE_USER } = User.actions
const authentication = User.reducer
export default authentication