import React from 'react'
import s from './AccountWrapper.module.scss'

import Login from '../Login/Login'

const containerWidth = 578;
const scaleNum = document.body.clientWidth / containerWidth;
const scaleRate = scaleNum > 1 ? 1 : scaleNum;
const transform = {
  transformOrigin: 'center right',
  transform: `scale(${scaleRate})`
};

export default function AccountWrapper() {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <div className={s.layer} style={transform}>
            <div className={s.content}>
              <div className={s['account-form']} >

                <Login/>
                
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
