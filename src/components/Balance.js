// Basic React import
import React, { useContext } from 'react';

// Context API import
import { GlobalContext } from '../Context';

// Balance Component
export const Balance = () => {

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}
