// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { setToken } from '../utils';
import './Login.css';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isPassDisabled, setIsPassDisabled] = useState(true);

  const handleValidate = async () => {
    setLoading(true);
    /*try {
      const response = await axios.post('##userInput##/validate-mobile', { mobile });
      setUsername(response.data.username);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(`Error: ${err.response.status} - ${err.response.data.message}`);
      setTimeout(() => setError(''), 10000);
    }*/
    setUsername('Vamsi_Chowdary');
    setIsPassDisabled(false);
    setLoading(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    /*try {
      const response = await axios.post('##userInput##/login', { mobile, password });
      setToken(response.data.token);
      setLoading(false);
      window.location.href = '/';
    } catch (err) {
      setLoading(false);
      setError(`Error: ${err.response.status} - ${err.response.data.message}`);
      setTimeout(() => setError(''), 10000);
    }*/
    setLoading(false);
    window.location.href = '/';
    //Write if mobile and password only then setToken
    setToken('gvfyqwgbefuybweoy8fgquihfiughu9viga8y56878');
  };

  return (
    <div className="login-page">
      {loading && <Spinner />}
      <h2>Login</h2>
      <div className="login-form">
        <div className="lf-1">
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button onClick={handleValidate}>Validate</button>
        </div>
        <div className='lf-2'>
        <input type="text" placeholder="Username" value={username} readOnly disabled={isPassDisabled}/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPassDisabled}
        />
        <button onClick={handleSubmit} disabled={isPassDisabled}>Submit</button>
        {error && <p className="error-msg">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
 