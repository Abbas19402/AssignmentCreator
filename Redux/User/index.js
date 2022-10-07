import { createSlice } from '@reduxjs/toolkit'

export const User = createSlice({
  name: 'userAuthentication',
  initialState: {
    user:'',
    at: '',
    loginStatus: false
  },
  reducers: {
    SAVE_USER: (state, action) => {
      state.user = action.payload
      state.loginStatus = true
    },
    SAVE_TOKEN: (state, action) => {
      state.at = action.payload
    },
    DELETE_USER: ( state , action ) => {
      console.log('DELETE_USER called');
      state.user = ''
      state.loginStatus = false
    }
  }
})
// Action creators are generated for each case reducer function
export const { SAVE_USER , SAVE_TOKEN , DELETE_USER } = User.actions
const authentication = User.reducer
export default authentication