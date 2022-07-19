import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isEqual } from 'lodash'

import { accountInput } from './AccountSlice'
import s from './Account.module.scss'

import Input from '../../components/Input/Input';
import SignInGroup from '../../components/SignInGroup/SignInGroup'

const alarm = (password, confirmPassword) => {
  if(!confirmPassword) {
    return '';
  }

  if(isEqual(password, confirmPassword)) {
    return 'success';
  } 

  return 'error';
}

export default function Account() {
  const dispatch = useDispatch();
  const {
    name,
    email,
    password,
    confirmPassword,
    icon,
    banner } = useSelector((state) => state.account);

  return (
    <div>
      <span className={s['span-title']}> Create Account </span>
      <div className={s['user-info']}>
        <Input
          label="User Name"
          type="text"
          placeholder="Enter"
          value={name}
          handleOnChange={e => dispatch(accountInput({ name: e.target.value }))}
        />
      
        <Input
          label="User Email"
          type="text"
          placeholder="username@domain.com"
          value={email}
          handleOnChange={e => dispatch(accountInput({ email: e.target.value }))}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter"
          value={password}
          handleOnChange={e => dispatch(accountInput({ password: e.target.value }))}
        />

        <Input
          alarm={alarm(password, confirmPassword)}
          label="Confirm Password"
          type="password"
          placeholder="Enter"
          value={confirmPassword}
          handleOnChange={e => dispatch(accountInput({ confirmPassword: e.target.value }))}
        />

        <SignInGroup
          buttonText="GREATE ACCOUNT"
          customText="Have an account?"
          operationText="Sign In"
        />

      </div>

    </div>
  );
}
