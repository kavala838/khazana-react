// src/components/Payout.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { FaTimes } from 'react-icons/fa';
import './Payout.css'; // Add styling for the payout page

const Payout = () => {
  const [username, setUsername] = useState('');
  const [walletBalance, setWalletBalance] = useState(0);
  const [isPayout, setisPayout] = useState(true);
  const [form, setForm] = useState({
    mobile: '',
    bankAccount: '',
    ifscCode: '',
    amount: '',
    name: '',
  });
  const [errors, setErrors] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [walletTransactions, setWalletTransactions] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [pinError, setPinError] = useState(''); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Optionally set loading states here
        setLoading1(true);
        await fetchLastTransactions(); // Wait for the first API call to complete
        setLoading1(false);
        
         setLoading2(true);
        await fetchWalletTransactions(); // Wait for the second API call to complete
         setLoading2(false);
  
      } catch (error) {
        console.error("Error fetching transactions:", error);
        // Handle errors here
      }
    };
  
    fetchData();
  }, []);

  const fetchWalletTransactions = async () => {
    /*try {
      const response = await axios.get(`##userInput##/wallet-balance`);
      setWalletBalance(response.data.balance);
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
    }*/
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simulated data
          const response = [
            {
                "account_number": "3412662118",
                "amount": "10.00",
                "beneficiary_name": "kumarVamsi",
                "client_id": 11895533,
                "message": "Accepted.",
                "status": "2",
                "transaction_date": "Sat, 27 Jul 2024 06:45:19 GMT",
            },
            {
                "account_number": "3412662118",
                "amount": "10.00",
                "beneficiary_name": "kumarVamsi",
                "client_id": 11895534,
                "message": "Accepted.",
                "status": "Pending",
                "transaction_date": "Sat, 27 Jul 2024 06:48:00 GMT",
            },
            {
                "account_number": "3412662118",
                "amount": "10.00",
                "beneficiary_name": "kumarVamsi",
                "client_id": 11895535,
                "message": "Accepted.",
                "status": "Pending",
                "transaction_date": "Sat, 27 Jul 2024 06:52:51 GMT",
            },
            {
                "account_number": "3412662118",
                "amount": "10.00",
                "beneficiary_name": "kumarVamsi",
                "client_id": 11895536,
                "message": "Accepted.",
                "status": "Pending",
                "transaction_date": "Sat, 27 Jul 2024 06:55:20 GMT",
            }
        ];
        setWalletTransactions(response);
        resolve(); // Resolve the promise after data is set
      }, 5000); // 2 seconds delay
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const fetchLastTransactions = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simulated data
          const response = [
            {
                "account_number": "3412662118",
                "amount": "10.00",
                "beneficiary_name": "kumarVamsi",
                "client_id": 11895533,
                "message": "Accepted.",
                "status": "2",
                "transaction_date": "Sat, 27 Jul 2024 06:45:19 GMT",
                "user_charge": "30.00",
                "utr": null
            },
            {
                "account_number": "3412662118",
                "amount": "10.00",
                "beneficiary_name": "kumarVamsi",
                "client_id": 11895534,
                "message": "Accepted.",
                "status": "Pending",
                "transaction_date": "Sat, 27 Jul 2024 06:48:00 GMT",
                "user_charge": "30.00",
                "utr": 0
            },
            {
                "account_number": "3412662118",
                "amount": "10.00",
                "beneficiary_name": "kumarVamsi",
                "client_id": 11895535,
                "message": "Accepted.",
                "status": "Pending",
                "transaction_date": "Sat, 27 Jul 2024 06:52:51 GMT",
                "user_charge": "30.00",
                "utr": 0
            },
            {
                "account_number": "3412662118",
                "amount": "10.00",
                "beneficiary_name": "kumarVamsi",
                "client_id": 11895536,
                "message": "Accepted.",
                "status": "Pending",
                "transaction_date": "Sat, 27 Jul 2024 06:55:20 GMT",
                "user_charge": "30.00",
                "utr": 0
            },
            {
                "account_number": "3412662118",
                "amount": "10.00",
                "beneficiary_name": "kumarVamsi",
                "client_id": 11895537,
                "message": "Accepted.",
                "status": "Pending",
                "transaction_date": "Sat, 27 Jul 2024 06:57:02 GMT",
                "user_charge": "30.00",
                "utr": 0
            }
        ];
        setTransactions(response);
        resolve(); // Resolve the promise after data is set
      }, 5000); // 2 seconds delay
    });
    /*try {
      const response = await axios.get(`##userInput##/last-transactions`);
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }*/
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleHeaderChange = (e) => {
    if ((!(e===1 && isPayout)) || (!(e===2 && !isPayout))) {
      setisPayout((earlier)=>!earlier);
    }
  };
  const handlePinSubmit = () => {
    if (pinCode === '1234') { // Example validation, replace with your logic
      setShowPopup(false); // Hide the popup
      // Proceed with the original form submission logic
      handleSubmit(); // Assuming handleSubmit is the function to actually process the form
    } else {
      setPinError('Invalid Pin Code');
    }
  };

  const handleSubmit1 = (e) =>{
    e.preventDefault();
    setShowPopup(true); 
  };
  const handleSubmit = async (pin) => {
    //e.preventDefault();
    setErrors({});
    const { amount } = form;

    if (amount > walletBalance) {
      setErrors({ ...errors, amount: 'Insufficient balance' });
      return;
    }

    if (amount < 50_000 && amount < 105) {
      setErrors({ ...errors, amount: 'Amount below minimum threshold' });
      return;
    }

    /*try {
      await axios.post(`##userInput##/payout`, form);
      alert('Payout successful');
    } catch (error) {
      console.error('Error processing payout:', error);
    }*/
  };

  return (
    <div className='payout-page-container'>
      <div className='payout-page-header'>
        <div onClick={()=>handleHeaderChange(1)} className={ isPayout ? 'payout-header-main payout-header-main-high' : 'payout-header-main payout-header-main-low'}>Payout</div>
        <div onClick={()=>handleHeaderChange(2)} className={ isPayout ? 'payout-header-main payout-header-main-low' : 'payout-header-main payout-header-main-high'}>Wallet History</div>
      </div>
      {
      isPayout 
      ? 
      <div className='payout-container-top'>
        <div className='payout-with-header-container-item'>
          <div className='payout-with-header-container payout-with-header-container-flex'>
        <h1 className='payout-header'>Payout Folks!:</h1>
        <div className='payout-form-section-top'>
        <form onSubmit={handleSubmit1}>
        <label>
          Mobile:
          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Bank Account:
          <input
            type="text"
            name="bankAccount"
            value={form.bankAccount}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          IFSC Code:
          <input
            type="text"
            name="ifscCode"
            value={form.ifscCode}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        {errors.amount && <p className="error-msg">{errors.amount}</p>}
        <button className='submitBtnPayout' type="submit">Submit</button>
      </form>
      </div>
      </div>
          <div className='balance-name-container'>
            <div className='bal-item bal-1'><label>Username:</label><div>vamsi_chowdary</div></div>
            <div className='bal-item bal-2'><label>Wallet Balance:</label><div>₹7500.0</div></div>
          </div>
        
        </div>
        <div className='payout-with-header-container'>
          <h1 className='payout-header'>Last 5 transactions:</h1>
          {loading1 && <Spinner />}
          {!loading1 && <table class="table-element">
            <thead className='thead'>
              <tr>
                <th>Account Number</th>
                <th>UTR</th>
                <th>Amount</th>
                <th>Name</th>
                <th>Status</th>
                <th>Transaction Date</th>
                <th>Charges</th>
                <th>Client ID</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.account_number}</td>
                  <td>{transaction.utr}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.beneficiary_name}</td>
                  { (transaction.status.toLowerCase()=='pending' || transaction.status.toLowerCase()=='success') &&
                  <td><div className={transaction.status.toLowerCase()=='pending' ? 'highlighted-label pending-label' : 'highlighted-label success-label'}>{transaction.status}</div></td>}
                  { (transaction.status.toLowerCase()!='pending' && transaction.status.toLowerCase()!='success') &&
                  <td>{transaction.status}</td>}
                  <td>{transaction.transaction_date}</td>
                  <td>{transaction.user_charge}</td>
                  <td>{transaction.client_id}</td>
                  <td>{transaction.message}</td>
                </tr>
              ))}
            </tbody>
          </table>}
          </div>
      </div>
      : 
      <div className='wallet-container'>
        {loading2 && <Spinner/>}
        {!loading2 && <table class="table-element">
            <thead className='thead'>
              <tr>
                <th>Account Number</th>
                <th>Amount</th>
                <th>Name</th>
                <th>Status</th>
                <th>Transaction Date</th>
                <th>Client ID</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {walletTransactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.account_number}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.beneficiary_name}</td>
                  { (transaction.status.toLowerCase()=='pending' || transaction.status.toLowerCase()=='success') &&
                  <td><div className={transaction.status.toLowerCase()=='pending' ? 'highlighted-label pending-label' : 'highlighted-label success-label'}>{transaction.status}</div></td>}
                  { (transaction.status.toLowerCase()!='pending' && transaction.status.toLowerCase()!='success') &&
                  <td>{transaction.status}</td>}
                  <td>{transaction.transaction_date}</td>
                  <td>{transaction.client_id}</td>
                  <td>{transaction.message}</td>
                </tr>
              ))}
            </tbody>
          </table>}
        </div>}
        {showPopup && (
  <div className="popup-overlay">
     
    <div className="popup-content">
    <FaTimes className='close-btn' onClick={closePopup}/>
      <h2>Enter Pin Code</h2>
      <input
        type="password"
        value={pinCode}
        onChange={(e) => setPinCode(e.target.value)}
        placeholder="Enter Pin Code"
      />
      {pinError && <p className="error-msg">{pinError}</p>}
      <button onClick={handlePinSubmit}>Submit</button>
    </div>
  </div>
)}
    </div>
    /*<div className="payout-page">
      <h2>Payout</h2>
      <div className="wallet-info">
        <p>Username: {username}</p>
        <p>Wallet Balance: ₹{walletBalance}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Mobile:
          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Bank Account:
          <input
            type="text"
            name="bankAccount"
            value={form.bankAccount}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          IFSC Code:
          <input
            type="text"
            name="ifscCode"
            value={form.ifscCode}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        {errors.amount && <p className="error-msg">{errors.amount}</p>}
        <button type="submit">Submit</button>
      </form>
      {loading && <Spinner />}
      <h3>Last 5 Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>*/
  );
};

export default Payout;
