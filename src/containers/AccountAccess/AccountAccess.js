import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import s from './AccountAccess.module.scss'
import Header from '../../components/Header/Header'

export default function AccountAccess() {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.login);

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
        <div className={s.background}>
        </div>
        <div className={s.content}></div>

      </div>
    </div>
  );
}
