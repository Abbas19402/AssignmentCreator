import { configureStore } from '@reduxjs/toolkit'
import mode from './DarkMode/index'
import authentication from './User'

const Store = configureStore({
  reducer: {
    mode: mode,
    auth: authentication
  }
})

export default Store