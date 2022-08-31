import { createSlice } from '@reduxjs/toolkit'

export const NFTPurchaseSlice = createSlice({
  name: 'purchase',
  initialState: {
    "photoUrl": "",
    "endD": "",
    "endH": "",
    "endM": "",
    "nftCollectionName": "",
    "titleCollections": "",
    "nftName": "",
    "viewNumber": "",
    "likeNumber": "",
    "balance": "",
    "currency": "",
    "price": "",
    "nftCreatorPhotoUrl": "",
    "nftCreatorName": "",
    "nftEnterpriseLogo": "",
    "nftEnterpriseName": "",
    "saleType": "",
    "blockchain": {
      "iconPath": "",
      "label": "",
      "value": ""
    },
    "description": "",
    "details": {
      "contractAddress": "",
      "tokenID": "",
      "tokenStandard": "",
      "stocks": ""
    },
    "attributes": {
      "model": "",
      "rarity": "",
      "itemSize": "",
      "color": ""
    }
  },
  reducers: {
    setPurchase: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
})

export const { setPurchase  } = NFTPurchaseSlice.actions

export default NFTPurchaseSlice.reducer
