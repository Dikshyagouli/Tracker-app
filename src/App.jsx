import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <TransactionForm />
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;
