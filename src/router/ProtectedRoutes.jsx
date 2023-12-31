import React from 'react'
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({children}) => { //children reprasend cart page
    const token = JSON.parse(sessionStorage.getItem("token"));

  return token ? children : <Navigate to={'/login'}/>
}

export default ProtectedRoutes