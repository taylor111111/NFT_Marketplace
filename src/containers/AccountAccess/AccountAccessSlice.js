import { createSlice } from '@reduxjs/toolkit'

export const AccountAccessSlice = createSlice({
  name: 'accountAccess',
  initialState: {
    first: 0,
    cards: [{
      endD: '',
      endH: '',
      endM: '',
      nftName: '',
      balance: '',
      collection: ''
    }]
  },
  reducers: {

    scrollImg: (state, action) => {
      Object.assign(state, action.payload);
    },

    setImgInfo: (state, action) => {
      Object.assign(state, action.payload);
    }

  },
})

// Action creators are generated for each case reducer function
export const { scrollImg, setImgInfo } = AccountAccessSlice.actions

export default AccountAccessSlice.reducer
