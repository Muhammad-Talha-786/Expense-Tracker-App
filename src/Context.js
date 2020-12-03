// Basic React and Hooks import
import React, { createContext, useReducer } from 'react';

// Reducer component import
import AppReducer from './Reducer';

// Initial state with empty array
const initialState = { transactions: [] }

// Creating context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {

  // Using reducer hook
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Reducer Delete Transaction Action
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  // Reducer Add Transaction Action
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  // rendering the add and delete transaction
  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}