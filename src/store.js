import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './containers/Login/LoginSlice'
import AccountWrapperSlice from './containers/AccountWrapper/AccountWrapperSlice'
import AccountSlice from './containers/Account/AccountSlice'
import AccountAccessSlice from './containers/AccountAccess/AccountAccessSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    accountWrapper: AccountWrapperSlice,
    account: AccountSlice,
    accountAccess: AccountAccessSlice,
  },
})
