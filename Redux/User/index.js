import { createSlice } from '@reduxjs/toolkit'

export const User = createSlice({
  name: 'userAuthentication',
  initialState: {
    user:''
  },
  reducers: {
    SAVE_USER: (state, action) => {
      state.user = action.payload
    },
    DELETE_USER: ( state , action ) => {
      console.log('DELETE_USER called');
      state.user = 'loggedOut'
    }
  }
})
// Action creators are generated for each case reducer function
export const { SAVE_USER , DELETE_USER } = User.actions
const authentication = User.reducer
export default authentication