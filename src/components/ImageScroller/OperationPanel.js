import React from 'react'
import s from './OperationPanel.module.scss'
import ArrowLeft from '../IconArrow/ArrowLeft'
import ArrowRight from '../IconArrow/ArrowRight'

export default function OperationPanel(props) {

  return (<div>
    <ul className={s.arrow}>
      <li
        className={s['arr-left']}
        onClick={() => props.handleLeft()}
      >
        <ArrowLeft/>
      </li>
      <li
        className={s['arr-right']}
        onClick={() => props.handleRight()}
      >
        <ArrowRight/>
      </li>
    </ul>
    <ul className={s.bar}>
      {props.imgUrl.map((item,index) => <li
        key={index}
        className={index === props.first ? s.active : ''}
      />)}
    </ul>
  </div>)
}
