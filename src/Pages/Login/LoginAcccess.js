import React from 'react'
import { Navigate } from 'react-router-dom'
import { Login } from './Login'

export const LoginAcccess = () => {
  return (
    <>
    {window.localStorage.getItem('isLogin', 'true') === 'true'  ? <Navigate to='/'/> : <Login/>}

    </>
  )
}
