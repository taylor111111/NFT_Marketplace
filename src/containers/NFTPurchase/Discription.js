import React from 'react'
import s from './Discription.module.scss'

export default function Discription(props) {

  return (
    <div className={s.discription}>
      <h3>DESCRIPTION</h3>
      <p>
        {props.description}
      </p>
    </div>
  )
}
