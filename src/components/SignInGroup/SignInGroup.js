import React from 'react'
import s from './SignInGroup.module.scss'

export default function SignInGroup(props) {

  return (<div className={s['sign-in-group']}>
    <button
      onClick={() => props.handleButton()}
    >
      {props.buttonText}
    </button>
    <div className={s['inline-text']}> 
      <span>{props.customText}</span>
      <span
        className={s['go-change-operation']}
        onClick={() => props.operationExc()}
      >{props.operationText}</span>
    </div>
  </div>)
}
