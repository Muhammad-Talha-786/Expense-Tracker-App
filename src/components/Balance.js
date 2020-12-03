// Basic React import
import React, { useContext } from 'react';

// Context API import
import { GlobalContext } from '../Context';

// Balance Component
export const Balance = () => {

  // Using useContext Hook
  const { transactions } = useContext(GlobalContext);

  // Maping over transaction array
  const amounts = transactions.map(transaction => transaction.amount);

  // Sum all the incomes and expenses
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // Checking the sign of total
  const sign = total < 0 ? '-' : '+';

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>{sign}${Math.abs(total)}</h1>
    </div>
  )
}
