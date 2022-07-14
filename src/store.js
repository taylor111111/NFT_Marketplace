import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import loginReducer from './containers/Login/LoginSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
})
