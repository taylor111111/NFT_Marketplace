import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './AccountSummary.module.scss'

export default function AccountSummary() {
  const history = useNavigate();

  return (
    <div className={s.wrapper}>
      <div className={s.summary}>
        <i className={`${s.icon} ${s['ic-nike']}`}/>
        <span className={s['nft-name']}>AIR JORDAN</span>
        <span className={s.detail}>Black Red Jordan Sport</span>
        <table>
          <tbody>
            <tr className={s.num}>
              <td>07</td>
              <td>:</td>
              <td>20</td>
              <td>:</td>
              <td>32</td>
            </tr>
            <tr className={s.dhm}>
              <td>D</td>
              <td></td>
              <td>H</td>
              <td></td>
              <td>M</td>
            </tr>
           </tbody>
          </table>
        <div className={s.buttons}>
          <span className={s.eth}><i className={`${s.icon} ${s['ic-eth']}`}/>3.12</span>
          <button
            onClick={() => history("/NFTPurchase")}
          >VIEW DETAIL</button>
        </div>
      </div>
    </div>
  )
}
