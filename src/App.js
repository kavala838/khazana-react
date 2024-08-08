// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import History from './components/History';
import Payout from './components/Payout';
import About from './components/About';
import Sidebar from './components/Sidebar';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import './App.css'; // Add your app-level CSS
import SelfRecharge from './components/SelfRecharge';

const App = () => {
  // Check if user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  console.log(isAuthenticated);

  return (
    <Router>
      <div className="app-container">
        <Sidebar  isAuthenticated={isAuthenticated}/>
        <div id="main-content" className="content">
          <Routes>
            <Route path="/about" element={<About isAuthenticated={isAuthenticated}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/history" element={<PrivateRoute element={<History />} />} />
            <Route path="/payout" element={<PrivateRoute element={<Payout />} />} />
            <Route path="/selfrecharge" element={<PrivateRoute element={<SelfRecharge />} />} />
            <Route path="/logout" element={<PrivateRoute element={<Logout setIsAuthenticated={setIsAuthenticated} />} />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
