import React, { useState } from 'react';
import axios from 'axios';

const TransferForm = () => {
  const [fromUser, setFromUser] = useState('');
  const [toUser, setToUser] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/transactions/transfer', { fromUser, toUser, amount });
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={fromUser} onChange={(e) => setFromUser(e.target.value)} placeholder="From User ID" />
      <input type="text" value={toUser} onChange={(e) => setToUser(e.target.value)} placeholder="To User ID" />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <button type="submit">Transfer</button>
    </form>
  );
};

export default TransferForm;
