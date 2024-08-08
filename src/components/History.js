// src/components/History.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { FaDownload } from 'react-icons/fa';
import './History.css'; // Add styling for the history page

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isTableLoaded, setTableStatus] = useState(false);

  /*useEffect(() => {
    if (fromDate && toDate) {
      fetchTransactions();
    }
  }, [fromDate, toDate,page]);*/
 

  const fetchTransactions = async () => {
    
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
          },
          {
              "account_number": "3412662118",
              "amount": "10.00",
              "beneficiary_name": "kumarVamsi",
              "client_id": 11895538,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 06:59:09 GMT",
              "user_charge": "30.00",
              "utr": 0
          },
          {
              "account_number": "3412662118",
              "amount": "10.00",
              "beneficiary_name": "kumarVamsi",
              "client_id": 11895539,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 07:07:07 GMT",
              "user_charge": "30.00",
              "utr": 0
          },
          {
              "account_number": "3412662118",
              "amount": "25.00",
              "beneficiary_name": "kumarVamsi",
              "client_id": 11895540,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 07:09:20 GMT",
              "user_charge": "45.00",
              "utr": 0
          },
          {
              "account_number": "3412662118",
              "amount": "25.00",
              "beneficiary_name": "kumarVamsi",
              "client_id": 11895550,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 07:13:03 GMT",
              "user_charge": "45.00",
              "utr": 0
          },
          {
              "account_number": "50100569961806",
              "amount": "20.00",
              "beneficiary_name": "VAMSI",
              "client_id": 10455177,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 13:47:00 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961806",
              "amount": "20.00",
              "beneficiary_name": "VAMSI",
              "client_id": 85809663,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 13:48:30 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961806",
              "amount": "20.00",
              "beneficiary_name": "vamsi",
              "client_id": 97192837,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 13:51:47 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961806",
              "amount": "20.00",
              "beneficiary_name": "vamsi",
              "client_id": 32808717,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 13:53:58 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "20.00",
              "beneficiary_name": "vamsi",
              "client_id": 50590859,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 13:55:06 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961806",
              "amount": "20.00",
              "beneficiary_name": "vamsi",
              "client_id": 8582193,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 13:57:22 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "20.00",
              "beneficiary_name": "vamsi",
              "client_id": 45452592,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 13:59:25 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "20.00",
              "beneficiary_name": "vamsi",
              "client_id": 78089189,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 14:03:24 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "20.00",
              "beneficiary_name": "VAMSI",
              "client_id": 47723140,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 14:08:59 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "10.00",
              "beneficiary_name": "Vamsi",
              "client_id": 79370768,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 14:15:20 GMT",
              "user_charge": "30.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "20.00",
              "beneficiary_name": "vamsi",
              "client_id": 80852044,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 14:16:33 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "20.00",
              "beneficiary_name": "vamsi",
              "client_id": 46374903,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 14:18:17 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "20.00",
              "beneficiary_name": "Vamsi",
              "client_id": 64333897,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 14:20:08 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "20.00",
              "beneficiary_name": "vamsi",
              "client_id": 70276933,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 14:45:58 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "20.00",
              "beneficiary_name": "VAMSI",
              "client_id": 7681822,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 14:47:41 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "20.00",
              "beneficiary_name": "VAMSI",
              "client_id": 77917821,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 14:49:44 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "20.00",
              "beneficiary_name": "VAMSI",
              "client_id": 89726219,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 14:58:14 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "20.00",
              "beneficiary_name": "Vamsi",
              "client_id": 27962004,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 15:07:42 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "3412662118",
              "amount": "100.00",
              "beneficiary_name": "chaithu",
              "client_id": 20025851,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 15:10:53 GMT",
              "user_charge": "120.00",
              "utr": 0
          },
          {
              "account_number": "50100569961806",
              "amount": "20.00",
              "beneficiary_name": "vamsi",
              "client_id": 61518908,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 15:17:55 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "3412662118",
              "amount": "110.00",
              "beneficiary_name": "chaithu",
              "client_id": 58385529,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 15:19:13 GMT",
              "user_charge": "130.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "25.00",
              "beneficiary_name": "kumarVamsi",
              "client_id": 11895565,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 15:53:41 GMT",
              "user_charge": "45.00",
              "utr": 0
          },
          {
              "account_number": "3412662118",
              "amount": "70.00",
              "beneficiary_name": "chaithu",
              "client_id": 11239508,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sat, 27 Jul 2024 15:59:24 GMT",
              "user_charge": "90.00",
              "utr": 0
          },
          {
              "account_number": "3412662118",
              "amount": "25.00",
              "beneficiary_name": "kumarVamsi",
              "client_id": 11895420,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sun, 28 Jul 2024 06:23:11 GMT",
              "user_charge": "45.00",
              "utr": 0
          },
          {
              "account_number": "3412662118",
              "amount": "25.00",
              "beneficiary_name": "kumarVamsi",
              "client_id": 11895421,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sun, 28 Jul 2024 06:44:45 GMT",
              "user_charge": "45.00",
              "utr": 0
          },
          {
              "account_number": "3412662118",
              "amount": "25.00",
              "beneficiary_name": "kumarVamsi",
              "client_id": 10954112,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sun, 28 Jul 2024 08:09:29 GMT",
              "user_charge": "45.00",
              "utr": 0
          },
          {
              "account_number": "3412662118",
              "amount": "25.00",
              "beneficiary_name": "kumarVamsi",
              "client_id": 10954113,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Sun, 28 Jul 2024 08:11:01 GMT",
              "user_charge": "45.00",
              "utr": 0
          },
          {
              "account_number": "3412662118",
              "amount": "40.00",
              "beneficiary_name": "kumarVamsi",
              "client_id": 10954114,
              "message": "Credited to beneficiary POTRU CHAITHANYA SAI on 28-07-2024 13:42:47",
              "status": "1",
              "transaction_date": "Sun, 28 Jul 2024 08:12:45 GMT",
              "user_charge": "60.00",
              "utr": 421013318506
          },
          {
              "account_number": "3412662118",
              "amount": "40.00",
              "beneficiary_name": "kumarVamsi",
              "client_id": 10954115,
              "message": "Credited to beneficiary POTRU CHAITHANYA SAI on 28-07-2024 13:45:59",
              "status": "Success",
              "transaction_date": "Sun, 28 Jul 2024 08:15:58 GMT",
              "user_charge": "60.00",
              "utr": 421013337773
          },
          {
              "account_number": "50100569961805",
              "amount": "50.00",
              "beneficiary_name": "vamsi",
              "client_id": 51769963,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Mon, 29 Jul 2024 00:42:22 GMT",
              "user_charge": "70.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "50.00",
              "beneficiary_name": "vamsi",
              "client_id": 74291934,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Mon, 29 Jul 2024 02:07:01 GMT",
              "user_charge": "70.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "50.00",
              "beneficiary_name": "vamsi",
              "client_id": 78173986,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Mon, 29 Jul 2024 02:11:19 GMT",
              "user_charge": "70.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "50.00",
              "beneficiary_name": "vamsi",
              "client_id": 23306701,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Mon, 29 Jul 2024 02:12:14 GMT",
              "user_charge": "70.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "50.00",
              "beneficiary_name": "vamsi",
              "client_id": 71043165,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Mon, 29 Jul 2024 02:13:39 GMT",
              "user_charge": "70.00",
              "utr": 0
          },
          {
              "account_number": "50100569961805",
              "amount": "20.00",
              "beneficiary_name": "vamsi",
              "client_id": 616237,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Mon, 29 Jul 2024 02:14:48 GMT",
              "user_charge": "40.00",
              "utr": 0
          },
          {
              "account_number": "3412662118",
              "amount": "100.00",
              "beneficiary_name": "chaithu",
              "client_id": 7057369,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Mon, 29 Jul 2024 02:38:26 GMT",
              "user_charge": "120.00",
              "utr": 0
          },
          {
              "account_number": "3412662118",
              "amount": "98.00",
              "beneficiary_name": "Chaithu",
              "client_id": 98348505,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Mon, 29 Jul 2024 02:40:16 GMT",
              "user_charge": "118.00",
              "utr": 0
          },
          {
              "account_number": "3412662118",
              "amount": "4000.00",
              "beneficiary_name": "kumarVamsi",
              "client_id": 10954188,
              "message": "Accepted.",
              "status": "Pending",
              "transaction_date": "Mon, 29 Jul 2024 03:40:25 GMT",
              "user_charge": "4035.00",
              "utr": 0
          }
      ];
      setTransactions(response);
      console.log("total size: ");
      console.log(parseInt(response.length));
      if(parseInt(response.length)>0){
        setTableStatus(true);
      }
      else{
        setTableStatus(false);
      }
      setTotalPages(Math.ceil((response.length/10.0))) ; // Set the simulated data
        resolve(); // Resolve the promise after data is set
      }, 5000); // 2 seconds delay
    });
    /*try {
      const response = await axios.get(`##userInput##/transactions`, {
        params: { fromDate, toDate, page }
      });
      setTransactions(response.data.transactions);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }*/
      
    
  };

  const handleSubmit =async  (e) => {
    e.preventDefault();
    setPage(1);
    setLoading(true);
    await fetchTransactions();
    setLoading(false);
  };

  const handleSearch = (e) => {
    
    console.log("filtered Transactions: ");
    const filteredTransactions1 = transactions.filter(transaction =>
      Object.values(transaction).some(value => {
        // Convert value to string if it's not null or undefined
        const strValue = value != null ? value.toString().toLowerCase() : '';
        return strValue.includes(e.target.value.toLowerCase());}
      )
    );
    console.log(filteredTransactions1.length);
    console.log(Math.ceil((filteredTransactions1.length/10.0)));
    setTotalPages(prevState => {
      // Calculate new state1 value based on prevState
      return Math.ceil((filteredTransactions1.length/10.0));
    });
    setPage(prevState => {
      // Calculate new state1 value based on prevState
      return 1;
    });
    setSearchTerm(prevState => {
      // Calculate new state1 value based on prevState
      return e.target.value;
    });
  };

  const filteredTransactions = transactions.filter(transaction =>
    Object.values(transaction).some(value => {
      // Convert value to string if it's not null or undefined
      const strValue = value != null ? value.toString().toLowerCase() : '';
      return strValue.includes(searchTerm.toLowerCase());}
    )
  );

  return (
    <div class='history-container-top'>
      <div class='history-page-heading'>TRANSACTIONS HISTORY</div>
    <div className='history-container'>
      <div className='history-header'>
        <form class="search-conainer" onSubmit={handleSubmit}>
        <label class="label date-item">
          From Date:
          <input
          class="date-input"
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            required
          />
        </label>
        <label class="label date-item">
          To Date:
          <input
          class="date-input"
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            required
          />
        </label>
        <button class="buttonDate" type="submit">Submit</button>
      </form>
        { isTableLoaded && <div className='table-content-header'>
        <div class="table-search-container">
          <input
            class="table-search"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div class="export-icon-table"><FaDownload/></div>
          </div>
        </div>}
      </div>
      {loading && <Spinner />}
      {!loading && isTableLoaded && (
        <>
          <table class="table-element">
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
              {filteredTransactions.slice((page - 1) * 10, page * 10).map((transaction, index) => (
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
          </table>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={i + 1 === page ? 'active' : 'table-page-btn'}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    </div>

    //Here Starts the older version
    /*<div className="history-page">
      <h2 class="pageHeading">Transaction History</h2>
      <form class="formContainerDate" onSubmit={handleSubmit}>
        <label class="date-item">
          From Date:
          <input
          class="date-input"
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            required
          />
        </label>
        <label class="date-item">
          To Date:
          <input
          class="date-input"
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            required
          />
        </label>
        <button class="date-item buttonDate" type="submit">Submit</button>
      </form>
      {loading && <Spinner />}
      {!loading && (
        <>
          <div class="table-search-container">
          <input
            class="table-search"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div class="export-icon-table"><FaDownload/></div>
          </div>
          <div class="table-container">
          <table class="table-element">
            <thead>
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
              {filteredTransactions.slice((page - 1) * 10, page * 10).map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.account_number}</td>
                  <td>{transaction.utr}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.beneficiary_name}</td>
                  <td>{transaction.status}</td>
                  <td>{transaction.transaction_date}</td>
                  <td>{transaction.user_charge}</td>
                  <td>{transaction.client_id}</td>
                  <td>{transaction.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={i + 1 === page ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>*/
  );
};

export default History;
