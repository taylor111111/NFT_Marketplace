import React from 'react'
import s from './NFTPurchase.module.scss'

import Header from '../../components/Header/Header'
import ImageShow from './ImageShow'
import Introduce from './Introduce'
import Discription from './Discription'
import Details from './Details'
import Attributes from './Attributes'

export default function NFTPurchase() {

  return (<div className={s.purchase}>
    <Header/>
    <div className={s.banner}></div>
    <div className={s.container}>
      <button className={s.back}>
        BACK
      </button>

      <div className={s.content}>
        <div className={s.left}>
        </div>

        <div className={s.right}>
          <div className={s.detail}>
            <ImageShow/>
            <div className={s['de-right']}>
              <Introduce/>
              <Discription/>
              <Details/>
              <Attributes/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
