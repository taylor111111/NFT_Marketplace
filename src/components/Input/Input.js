import React from 'react'
import s from './Input.module.scss'

export default function Input(props) {

  return (<label className={s.Input}>
    <span>
      {props.label} 
    </span>
    <input
      className={s[props.alarm]}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={e => {
        props.handleOnChange(e);
    }}/>
  </label>)
}
