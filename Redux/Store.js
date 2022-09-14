import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './index'

const Store = configureStore({
  reducer: {
    root: rootReducer,
  }
})

export default Store