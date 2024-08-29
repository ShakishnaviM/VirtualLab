import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";



export const Protected = ({ children }) => {
  const admin = localStorage.getItem('admin');
  

  if (!JSON.parse(admin)) {
    return children;
  } else {
    return <Navigate to='/AdminDashboard' replace={true} />;
  }
};