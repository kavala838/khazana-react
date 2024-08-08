// src/components/Sidebar.js
import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaHome, FaDollarSign, FaHistory, FaPlusCircle, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa';
import './Sidebar.css'; // Add your CSS file for styling

const Sidebar = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {setIsOpen(!isOpen)
    const mainContent = document.getElementById('main-content');
    mainContent.classList.toggle('closed');
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h2 class ="sidebar-header-text"><span class="logo-icon">💰</span><span>KHAZANA PAY</span></h2>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul className={`${isOpen ? '' : 'marginLeft1'}`}>
        {isAuthenticated ? (
          <>
            <li className={`sidebar-li-item ${isOpen ? '' : 'marginLeft'}`}><NavLink to="/dashboard" className="sidebar-link" activeClassName="selected"><span><FaHome /></span><span className={`sidebar-item-text ${isOpen ? 'visible' : 'hidden'}`}> Dashboard</span> </NavLink> </li>
            <li className={`sidebar-li-item ${isOpen ? '' : 'marginLeft'}`}><NavLink to="/payout" className="sidebar-link" activeClassName="selected"><span ><FaDollarSign /></span><span className={`sidebar-item-text ${isOpen ? 'visible' : 'hidden'}`}> Payout</span></NavLink></li>
            <li className={`sidebar-li-item ${isOpen ? '' : 'marginLeft'}`}><NavLink to="/history" className="sidebar-link" activeClassName="selected"><span><FaHistory /></span><span className={`sidebar-item-text ${isOpen ? 'visible' : 'hidden'}`}> History</span></NavLink></li>
            <li className={`sidebar-li-item ${isOpen ? '' : 'marginLeft'}`}><NavLink to="/selfrecharge" className="sidebar-link" activeClassName="selected"><span><FaPlusCircle /></span> <span className={`sidebar-item-text ${isOpen ? 'visible' : 'hidden'}`}> Self Recharge</span></NavLink></li>
            <li className={`sidebar-li-item ${isOpen ? '' : 'marginLeft'}`}><NavLink to="/about" className="sidebar-link" activeClassName="selected"><span><FaInfoCircle /></span><span className={`sidebar-item-text ${isOpen ? 'visible' : 'hidden'}`}> About</span></NavLink></li>
            <li className={`sidebar-li-item ${isOpen ? '' : 'marginLeft'}`}><NavLink to="/logout" className="sidebar-link" activeClassName="selected"><span><FaSignOutAlt /></span><span className={`sidebar-item-text ${isOpen ? 'visible' : 'hidden'}`}> LOGOUT</span></NavLink></li>
          </>
        ) : (
          <>
            <li className={`sidebar-li-item ${isOpen ? '' : 'marginLeft'}`}><NavLink to="/about"  className="sidebar-link" activeClassName="selected"><span><FaInfoCircle /></span> <span className={`sidebar-item-text ${isOpen ? 'visible' : 'hidden'}`}> About</span></NavLink></li>
            <li className={`sidebar-li-item ${isOpen ? '' : 'marginLeft'}`}><NavLink to="/login" className="sidebar-link" activeClassName="selected"><span><FaSignInAlt /></span> <span className={`sidebar-item-text ${isOpen ? 'visible' : 'hidden'}`}> Login</span></NavLink></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
