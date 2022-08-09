import React from 'react'
import s from './Introduce.module.scss'

export default function Introduce() {

  return (
    <div className={s.introduce}>
      <h1>
        <span className={s['de-title']}>JORDAN COLLECTIONS</span>
        <div className={s['h-right']}>
          <i className={`${s.icon} ${s.eye}`}/>
          <span className={s['h-icon']}>128 views</span>
          <i className={`${s.icon} ${s['icon-heart']}`}/>
          <span className={s['h-icon']}>57 likes</span>
        </div>
      </h1>

      <h2>White Jordan Sport</h2>
      <div>
        <span className={s.num}>3.12ETH</span>
        
        <span className={s.price}>($ 8,762.64)</span>
      </div>
      <table>
        <tbody>
          <tr className={s.title}>
            <td>Creator</td>
            <td>Owner</td>
            <td>Sale Type</td>
            <td>Blockchain</td>
          </tr>
          <tr className={s.content}>
            <td className={s.avatar}>Eddie Smith</td>
            <td className={s.owner}>Nike</td>
            <td>Fixed Price</td>
            <td className={s.etc}>Ethereum</td>
          </tr>
        </tbody>
      </table>
      <button>ADD TO CART</button>
    </div>
  )
}

