import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";



export const UserProtect = ({ children }) => {
  const admin = localStorage.getItem('admin');
  

  if (JSON.parse(admin)) {
    return children;
  } else {
    return <Navigate to='/Dashboard' replace={true} />;
  }
};