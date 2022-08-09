import React from 'react'
import s from './Attributes.module.scss'

export default function Attributes() {

  return (
    <div className={s.atrb}>
      <h3>ATTRIBUTES</h3>
      <ul>
        <li>
          <span>Model</span>
          <span className={s['li-right']}>Nikesport</span>
        </li>
        <li>
          <span>Rarity</span>
          <span className={s['li-right']}>Common</span>
        </li>
        <li>
          <span>Item Size</span>
          <span className={s['li-right']}>2500 x 2500</span>
        </li>
        <li>
          <span>Color</span>
          <span className={s['li-right']}>Neon</span>
        </li>
      </ul>
    </div>
  )
}
