import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import './index.scss'
import App from './App'
import AccountAccess from './containers/AccountAccess/AccountAccess'
import NFTPurchase from './containers/NFTPurchase/NFTPurchase'

import store from './store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="AccountAccess" element={<AccountAccess />} />
        <Route path="NFTPurchase/:index" element={<NFTPurchase />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

