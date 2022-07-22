import React from 'react'
import { useSelector } from 'react-redux'
import { isEqual } from 'lodash'
import s from './AccountWrapper.module.scss'

import Login from '../Login/Login'
import Account from '../Account/Account'

const containerWidth = 578;
const scaleNum = document.body.clientWidth / containerWidth;
const scaleRate = scaleNum > 1 ? 1 : scaleNum;
const transform = {
  transformOrigin: 'center right',
  transform: `scale(${scaleRate})`
};

const currentPage = (currentState) => {
  if(isEqual(currentState, 'account')) {
    return <Account/>;
  }

  return <Login/>;
}

export default function AccountWrapper() {
  const {
    currentState,
  } = useSelector((state) => state.accountWrapper);

  return (
    <div className={s.container}>
      <div className={s.logo}>
        <div className={s.layer} style={transform}>
            <div className={s.content}>
              <div className={s['account-form']} >

                {currentPage(currentState)}

              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
