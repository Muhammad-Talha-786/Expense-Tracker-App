import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import Transactions from "./Transactions";
import Footer from "./Footer";

const Right = () => {
  return (
    <div>
      <Header />
      <hr />
      <Balance />
      <Transactions />
      <Footer />
    </div>
  );
};

export default Right;
