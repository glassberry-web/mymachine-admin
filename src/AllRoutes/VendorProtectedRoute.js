import React from 'react'
import Admin from '../vendor/Admin';
import { Navigate } from "react-router-dom";

function VendorProtectedRoute() {
  const  vendorId  = JSON.parse(localStorage.getItem("vendor"));

  if (vendorId) {
    let token = vendorId;
    return token ? <Admin  /> : <Navigate to="/" />;

  }
}

export default VendorProtectedRoute
