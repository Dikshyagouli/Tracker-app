import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const TransactionForm = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add new transaction</h3>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter description..." />
      <input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
      <button>Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
