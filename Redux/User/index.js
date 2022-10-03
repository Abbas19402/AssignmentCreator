import { createSlice } from '@reduxjs/toolkit'

export const User = createSlice({
  name: 'userAuthentication',
  initialState: {
    user:'',
    loginStatus: false
  },
  reducers: {
    SAVE_USER: (state, action) => {
      state.user = action.payload
      state.loginStatus = true
    },
    DELETE_USER: ( state , action ) => {
      console.log('DELETE_USER called');
      state.user = ''
      state.loginStatus = false
    }
  }
})
// Action creators are generated for each case reducer function
export const { SAVE_USER , DELETE_USER } = User.actions
const authentication = User.reducer
export default authentication