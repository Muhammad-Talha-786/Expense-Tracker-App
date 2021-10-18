import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import TransactionList from "./TransactionList";
import Footer from "./Footer";

const Right = () => {
  return (
    <div>
      <Header />
      <Balance />
      <TransactionList />
      <Footer />
    </div>
  );
};

export default Right;
