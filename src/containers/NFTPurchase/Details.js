import React from 'react'
import s from './Details.module.scss'

export default function Details() {

  return (
    <div className={s.details}>
      <h3>DETAILS</h3>
      <ul>
        <li>
          <i className={s['de-icon']}/>
          <span>Contract Address</span>
          <span className={s['li-right']}>138893299...2338</span>
        </li>
        <li>
          <i className={s['de-icon']}/>
          <span>Token ID</span>
          <span className={s['li-right']}>23489329944562338</span>
        </li>
        <li>
          <i className={s['de-icon']}/>
          <span>Token Standard</span>
          <span className={s['li-right']}>DEAR-1723</span>
        </li>
        <li>
          <i className={s['de-icon']}/>
          <span>Stockes</span>
          <span className={s['li-right']}>1 of 4</span>
        </li>
      </ul>
    </div>
  )
}
