import React from 'react'
import s from './ImageShow.module.scss'

export default function ImageShow() {

  return (
    <div className={s['de-left']}>
      <img src={require('../../images/scroll-img01.png')} alt=""/>
      <h1>End in</h1>
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
    </div>
  )
}

