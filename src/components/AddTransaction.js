// Basic React and Hooks import
import React, { useState, useContext } from 'react'

// Context API import
import { GlobalContext } from '../Context';

// Add transaction component`s main function
export const AddTransaction = () => {

  // Creating Hook (state) for input text field
  const [text, setText] = useState('');

  // Creating Hook (state) for input amount field
  const [amount, setAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000), // create random id
      text,              // give it the entered text
      amount: +amount    // +amount parse the amount in number
    }

    addTransaction(newTransaction);
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        
        <div className="form-control">
          <label htmlFor="text">Transaction Type</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." required />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount ( -ve Expense, +ve Income )</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." required />
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
