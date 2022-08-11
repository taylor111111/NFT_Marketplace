import React from 'react'
import s from './Details.module.scss'

export default function Details() {

  return (
    <div className={s.details}>
      <h3>DETAILS</h3>
      <ul>
        <li>
          <i className={`${s.icon} ${s['ic-file-text']}`}/>
          <span>Contract Address</span>
          <span className={`${s['li-right']} ${s.addr}`}>138893299...2338</span>
        </li>
        <li>
          <i className={`${s.icon} ${s['ic-key']}`}/>
          <span>Token ID</span>
          <span className={s['li-right']}>23489329944562338</span>
        </li>
        <li>
          <i className={`${s.icon} ${s['ic-key']}`}/>
          <span>Token Standard</span>
          <span className={s['li-right']}>DEAR-1723</span>
        </li>
        <li>
          <i className={`${s.icon} ${s['ic-picture']}`}/>
          <span>Stockes</span>
          <span className={s['li-right']}>1 of 4</span>
        </li>
      </ul>
    </div>
  )
}
