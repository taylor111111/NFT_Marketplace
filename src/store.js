import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './containers/Login/LoginSlice'
import AccountWrapperSlice from './containers/AccountWrapper/AccountWrapperSlice'
import AccountSlice from './containers/Account/AccountSlice'
export default configureStore({
  reducer: {
    login: loginReducer,
    accountWrapper: AccountWrapperSlice,
    account: AccountSlice,
  },
})
