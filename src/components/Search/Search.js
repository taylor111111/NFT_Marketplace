import React from 'react'
import s from './Search.module.scss'

export default function Search(props) {

  return (
    <input
      className={s.search}
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={e => {
        props.handleOnChange(e);
    }}/>)
}
