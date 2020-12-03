// Basic React and Hook import
import React, { useContext } from 'react';

// Context Component import
import { GlobalContext } from '../Context';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  // Checking the sign
  const sign = transaction.amount < 0 ? '-' : '+';

  // rendering the transaction list and delete button ...
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>

      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
