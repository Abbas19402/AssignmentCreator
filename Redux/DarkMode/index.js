import { createSlice } from '@reduxjs/toolkit'

export const darkMode = createSlice({
  name: 'redux',
  initialState: {
    value: 'light',
    url: '',
  },
  reducers: {
    setDarkMode: (state, action) => {
      if(action.payload == false) {
          state.value = 'light'
      } else if(action.payload == true) {
          state.value = 'dark'
      }
    }
  }
})


// Action creators are generated for each case reducer function
export const { setDarkMode , setHamState} = darkMode.actions
const mode = darkMode.reducer
export default mode