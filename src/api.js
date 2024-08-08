// src/api.js
import axios from 'axios';

const API_BASE_URL = '##userInput##';

export const validateMobile = (mobile) => {
  return axios.post(`${API_BASE_URL}/validate-mobile`, { mobile });
};

export const login = (mobile, password) => {
  return axios.post(`${API_BASE_URL}/login`, { mobile, password });
};

export const fetchWalletBalance = () => {
  return axios.get(`${API_BASE_URL}/wallet-balance`);
};

export const fetchTransactions = (fromDate, toDate) => {
  return axios.get(`${API_BASE_URL}/transactions`, { params: { fromDate, toDate } });
};

// other API calls
 