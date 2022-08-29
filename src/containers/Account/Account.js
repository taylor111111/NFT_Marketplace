import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isEqual } from 'lodash'
import { useNavigate } from 'react-router-dom';

import { accountInput } from './AccountSlice'
import { changePage } from '../AccountWrapper/AccountWrapperSlice'
import s from './Account.module.scss'

import Input from '../../components/Input/Input';
import SignInGroup from '../../components/SignInGroup/SignInGroup'
import FileInput from '../../components/FileInput/FileInput'


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
  const history = useNavigate();
  const dispatch = useDispatch();
  const {
    name,
    email,
    password,
    confirmPassword,

    iconSize,
    iconName,

    bannerSize,
    bannerName,
  } = useSelector((state) => state.account);

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

        <FileInput
          label='Upload Icon'
          size={iconSize}
          name={iconName}
          handleOnChange={e => {
            const iconFile = e.target.files[0];
            
            dispatch(accountInput({
              iconSize: iconFile.size,
              iconName: iconFile.name
            }));
          }}
        />

        <FileInput
          label='Upload Banner'
          size={bannerSize}
          name={bannerName}
          handleOnChange={e => {
            const bannerFile = e.target.files[0];
            
            dispatch(accountInput({
              bannerSize: bannerFile.size,
              bannerName: bannerFile.name
            }));
          }}
        />

        <SignInGroup
          buttonText="GREATE ACCOUNT"
          customText="Have an account?"
          operationText="Sign In"
          operationExc={() => dispatch(changePage({ currentState: 'login' }))}
          handleButton={() => history("/AccountAccess")}
        />

      </div>

    </div>
  );
}
