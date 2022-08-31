import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './containers/Login/LoginSlice'
import AccountWrapperSlice from './containers/AccountWrapper/AccountWrapperSlice'
import AccountSlice from './containers/Account/AccountSlice'
import AccountAccessSlice from './containers/AccountAccess/AccountAccessSlice'
import NFTPurchaseSlice from './containers/NFTPurchase/NFTPurchaseSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    accountWrapper: AccountWrapperSlice,
    account: AccountSlice,
    accountAccess: AccountAccessSlice,
    purchase: NFTPurchaseSlice
  },
})
