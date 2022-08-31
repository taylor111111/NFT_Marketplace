import React from 'react'
import s from './ImageShow.module.scss'

export default function ImageShow(props) {

  return (
    <div className={s['de-left']}>
      <img src={props.photoName ? require(`../../images/${props.photoName}`) : "" } alt=""/>
      <h1>End in</h1>
      <table>
        <tbody>
          <tr className={s.num}>
            <td>{props.endD}</td>
            <td>:</td>
            <td>{props.endH}</td>
            <td>:</td>
            <td>{props.endM}</td>
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

