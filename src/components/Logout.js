import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = ({ setIsAuthenticated }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate token removal
        setTimeout(() => {
            localStorage.removeItem('token'); // remove the token
            setIsAuthenticated(false); 
            setLoading(false);
            navigate('/login'); // redirect to login page
        }, 2000); // simulate a delay for loading animation
    }, [navigate]);

    return (
        <div className="logout-container">
            {loading ? (
                <div className="loader"></div>
            ) : (
                <p>Redirecting...</p>
            )}
        </div>
    );
};

export default Logout;
