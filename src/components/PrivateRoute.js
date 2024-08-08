// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

// Utility to check if the user is authenticated
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // Replace with your authentication logic
};

const PrivateRoute = ({ element: Element, ...rest }) => {
  return isAuthenticated() ? Element : <Navigate to="/login" />;
};

export default PrivateRoute;
