import { createSlice } from '@reduxjs/toolkit'

export const AccountSlice = createSlice({
  name: 'account',
  initialState: {
    name:'',
    email: '',
    password: '',
    confirmPassword: '',
    icon:'',
    banner:''
  },
  reducers: {
    accountInput: (state, action) => {
      Object.assign(state, action.payload);
    }

  },
})

// Action creators are generated for each case reducer function
export const { accountInput } = AccountSlice.actions

export default AccountSlice.reducer

export const isEqualStr = (password, confirmPassword) => {
  return password === confirmPassword;
}
