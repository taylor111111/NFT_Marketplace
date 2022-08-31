import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'

import Header from '../../components/Header/Header'
import ImageContainer from './ImageContainer'
import AccountSummary from './AccountSummary'
import s from './AccountAccess.module.scss'

// fake data

export default class AccountAccess extends React.Component {
  render() {
    return (
      <div className={s.AccountAccess}>
        <Header/>
        <div className={s['user-account']}>
          <h1>USER ACCOUNT</h1>
          <div className={s.range}>
            <div className={s.left}>
              <i className={`${s.icon} ${s['ic-search']}`}/>
              <i className={`${s.icon} ${s['ic-control']}`}/>
            </div>
            <div className={s.right}>
              <span><i className={`${s.icon} ${s['ic-most-popular']}`}/>Most Popular</span>
              <span>Collection</span>
            </div>
          </div>
          <div className={s.background}/>
          <ImageContainer/>
          <AccountSummary/>
        </div>
      </div>
    );
  }
}
