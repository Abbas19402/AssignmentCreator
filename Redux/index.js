import { createSlice } from '@reduxjs/toolkit'

export const Redux = createSlice({
  name: 'redux',
  initialState: {
    value: 'light',
    url: '',
    hamStatus: false
  },
  reducers: {
    setDarkMode: (state, action) => {
      if(action.payload == false) {
          state.value = 'light'
      } else if(action.payload == true) {
          state.value = 'dark'
      }
    },
    setHamState: (state, action) => {
      state.hamStatus = action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const { setDarkMode , setHamState} = Redux.actions
const rootReducer = Redux.reducer
export default rootReducer