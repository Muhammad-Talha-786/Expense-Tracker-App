// Basic React import
import React, { useContext } from 'react';

// Transaction component import
import { Transaction } from './Transaction';

// Context API import
import { GlobalContext } from '../Context';

export const TransactionList = () => {

  // Using global state by Context API
  const { transactions } = useContext(GlobalContext);

  return (
    // creates a list of transaction based on entered data
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}
      </ul>
    </div>
  )
}
