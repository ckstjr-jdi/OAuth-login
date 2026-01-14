import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthProvider = ({children}) => {
  console.log(children)//함수
  const token = window.localStorage.getItem('token')
  //토큰이 없는 경우
  if(!token){
    return <Navigate to='/' />
  }
  return children
}

export default AuthProvider
