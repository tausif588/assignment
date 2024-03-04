import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function Auth() {

  
    const auth=localStorage.getItem("isAuth")
  return  auth?<Outlet/>:<Navigate to="/login" />
}

export default Auth