import React from 'react'
import s from './Introduce.module.scss'

export default function Introduce(props) {

  return (
    <div className={s.introduce}>
      <h1>
        <span className={s['de-title']}>JORDAN COLLECTIONS</span>
        <div className={s['h-right']}>
          <i className={`${s.icon} ${s.eye}`}/>
          <span className={s['h-icon']}>{props.viewNumber} views</span>
          <i className={`${s.icon} ${s['icon-heart']}`}/>
          <span className={s['h-icon']}>{props.likeNumber} likes</span>
        </div>
      </h1>

      <h2>{props.nftName}</h2>
      <div>
        <span className={s.num}>{props.balance} ETH</span>
        
        <span className={s.price}> ({props.price})</span>
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
            <td className={s.avatar}>{props.nftCreatorName}</td>
            <td className={s.owner}>{props.nftEnterpriseName}</td>
            <td>{props.saleType}</td>
            <td className={s.etc}>{props.blockchain.value}</td>
          </tr>
        </tbody>
      </table>
      <button>ADD TO CART</button>
    </div>
  )
}

