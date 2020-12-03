// Basic React import
import React, { useContext } from 'react';

// Context API import
import { GlobalContext } from '../Context';

// Main component function
export const IncomeExpenses = () => {

  // Using Hook i.e. Global Context API
  const { transactions } = useContext(GlobalContext);

  // Maping through amount state 
  const amounts = transactions.map(transaction => transaction.amount);

  // Income Sum
  const income = ( amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)).toFixed(2);

  // Expense Sum 
  const expense = ( amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  // Expense and Income rendering
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  )
}
