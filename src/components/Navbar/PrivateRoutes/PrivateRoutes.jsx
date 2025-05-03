import React from "react";
import { Navigate, Outlet } from 'react-router';

function PrivateRoutes() {
  const login = JSON.parse(localStorage.getItem('login'))

  return login ? <Outlet /> : <Navigate to={'/'} />;
}

export default PrivateRoutes;

