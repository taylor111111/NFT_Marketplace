import { createSlice } from '@reduxjs/toolkit'

export const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: ''
  },
  reducers: {
    loginInput: (state, action) => {
      Object.assign(state, action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginInput } = LoginSlice.actions

export default LoginSlice.reducer
