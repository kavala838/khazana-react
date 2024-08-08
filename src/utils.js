// src/utils.js
export const isLoggedIn = () => {
    return !!localStorage.getItem('token');
  };
  

  // src/utils.js
export const logout = () => {
    removeToken();
    window.location.href = '/login';
  };
  
  // src/utils.js
export const setToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  export const removeToken = () => {
    localStorage.removeItem('token');
  };
  
  
  // other utility functions
  