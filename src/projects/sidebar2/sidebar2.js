import React from "react";

import "./index.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./SideBar";
import Submenu from "./Submenu";

import { AppProvider } from "./context";

const Sidebar2 = () => {
  document.title = "strapi ripoff?";
  return (
    <>
      <AppProvider>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </AppProvider>
    </>
  );
};

export default Sidebar2;
