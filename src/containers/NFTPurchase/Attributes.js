import React from 'react'
import s from './Attributes.module.scss'

export default function Attributes(props) {

  return (
    <div className={s.atrb}>
      <h3>ATTRIBUTES</h3>
      <ul>
        <li>
          <span>Model</span>
          <span className={s['li-right']}>{props.model}</span>
        </li>
        <li>
          <span>Rarity</span>
          <span className={s['li-right']}>{props.rarity}</span>
        </li>
        <li>
          <span>Item Size</span>
          <span className={s['li-right']}>{props.itemSize}</span>
        </li>
        <li>
          <span>Color</span>
          <span className={s['li-right']}>{props.color}</span>
        </li>
      </ul>
    </div>
  )
}
