import React from 'react'
import { Navigate } from 'react-router-dom'

const Protectroute = ({children}) => {
  const isLoggedIn = JSON.parse(localStorage.getItem("currentUser"));

  return isLoggedIn ? children : <Navigate to="/login" replace />;

}

export default Protectroute
