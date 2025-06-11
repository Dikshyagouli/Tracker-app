import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul>
        {transactions.map(({ id, text, amount }) => (
          <li key={id} className={amount > 0 ? 'plus' : 'minus'}>
            {text} <span>${amount}</span>
            <button onClick={() => deleteTransaction(id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
