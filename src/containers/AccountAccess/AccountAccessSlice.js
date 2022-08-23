import { createSlice } from '@reduxjs/toolkit'

export const AccountAccessSlice = createSlice({
  name: 'accountAccess',
  initialState: {
    first: 0,
  },
  reducers: {

    scrollImg: (state, action) => {
      Object.assign(state, action.payload);
    }

  },
})

// Action creators are generated for each case reducer function
export const { scrollImg } = AccountAccessSlice.actions

export default AccountAccessSlice.reducer
