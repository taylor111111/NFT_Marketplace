import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginInput } from './LoginSlice'
import { changePage } from '../AccountWrapper/AccountWrapperSlice'
import s from './Login.module.scss'

import Input from '../../components/Input/Input'
import SignInGroup from '../../components/SignInGroup/SignInGroup'

export default function Login() {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.login);
  const history = useNavigate(); 

  return (
    <div>
      <span className={s['span-login']}> Login </span>
      <div className={s['user-info']}>
      
        <Input
          label="User Email"
          type="text"
          placeholder="username@domain.com"
          value={email}
          handleOnChange={e => dispatch(loginInput({ email: e.target.value, password}))}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter"
          value={password}
          handleOnChange={e => dispatch(loginInput({ email, password: e.target.value}))}
        />

        <SignInGroup
          buttonText="Sign In"
          customText=""
          operationText="Reset Password?"
          operationExc={() => dispatch(changePage({ currentState: 'resetPassword'}))}
          handleButton={() => history("/AccountAccess")}
        />

      </div>

      <div className={s['go-sign-up']}>
        Don’t have an account yet? 
        <span
          className={s.span}
          onClick={() => dispatch(changePage({ currentState: 'account'}))}
        > Sign Up</span>
      </div>
    </div>
  );
}
