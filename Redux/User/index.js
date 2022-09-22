import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

export const User = createSlice({
  name: 'redux',
  initialState: {
    loginData: {},
    signupData: {},
    isLoading: false
  },
  reducers: {
    LOGIN: async (state, action) => {
      // state.isLoading = true
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,action.payload) .then( res => {
        toast.success('Login Successfull!!')
        state.loginData = res
        localStorage.setItem('user', res.data)
        // state.isLoading = false
      }) .catch( err => {
        toast.error(err.message)
        // state.isLoading = false
      } )
    },
    SIGNUP: async ( state , action ) => {
      // state.isLoading = true
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/customer.signup`,action.payload) .then(( res ) => {
        toast.success('SignUp Successfull!!')
        state.signupData = res.data
        // state.isLoading = false
      }) .catch( err => {
        toast.error(err.message)
        // state.isLoading = false
      } )
    }
  }
})


// Action creators are generated for each case reducer function
export const { LOGIN , SIGNUP } = User.actions
const authentication = User.reducer
export default authentication