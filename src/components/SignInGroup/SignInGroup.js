import React from 'react'
import s from './SignInGroup.module.scss'

export default function SignInGroup(props) {

  return (<div className={s['sign-in-group']}>
    <button>SIGN IN</button>
    <span className={s.span}>Reset password?</span>
  </div>)
}
