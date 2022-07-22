import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function AccountAccess() {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.login);

  return (
    <div>
      Hello AccountAccess !!
    </div>
  );
}
