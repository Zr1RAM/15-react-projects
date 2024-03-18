import React from "react";
import "./index.css";

import { useGlobalContext } from "./context";
import { AppProvider } from "./context";

import Navbar from "./navbar";
import CartContainer from "./cartContainer";

const Cart = () => {
  document.title = "Cart";
  // I guess this doesnt work because AppProvider is here
  // const { loading } = useGlobalContext();
  // if (loading) {
  //   return (
  //     <div className="loading">
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  return (
    <AppProvider>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </AppProvider>
  );
};

export default Cart;
