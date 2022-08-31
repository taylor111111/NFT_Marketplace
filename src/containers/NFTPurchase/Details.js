import React from 'react'
import s from './Details.module.scss'

export default function Details(props) {

  return (
    <div className={s.details}>
      <h3>DETAILS</h3>
      <ul>
        <li>
          <i className={`${s.icon} ${s['ic-file-text']}`}/>
          <span>Contract Address</span>
          <span className={`${s['li-right']} ${s.addr}`}>{props.contractAddress}</span>
        </li>
        <li>
          <i className={`${s.icon} ${s['ic-key']}`}/>
          <span>Token ID</span>
          <span className={s['li-right']}>{props.tokenID}</span>
        </li>
        <li>
          <i className={`${s.icon} ${s['ic-key']}`}/>
          <span>Token Standard</span>
          <span className={s['li-right']}>{props.tokenStandard}</span>
        </li>
        <li>
          <i className={`${s.icon} ${s['ic-picture']}`}/>
          <span>Stockes</span>
          <span className={s['li-right']}>{props.stocks}</span>
        </li>
      </ul>
    </div>
  )
}
