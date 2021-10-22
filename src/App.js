import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { TransactionList } from "./components/TransactionList";

import { GlobalProvider } from "./context/GlobalState";

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionList />
    </GlobalProvider>
  );
}

export default App;
