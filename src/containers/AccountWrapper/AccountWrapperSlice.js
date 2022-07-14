import { createSlice } from '@reduxjs/toolkit'

export const AccountWrapperSlice = createSlice({
  name: 'accountWrapper',
  initialState: {
    currentState: 'login'
  },
  reducers: {
    changePage: (state, action) => {
      Object.assign(state, action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { changePage } = AccountWrapperSlice.actions

export default AccountWrapperSlice.reducer
