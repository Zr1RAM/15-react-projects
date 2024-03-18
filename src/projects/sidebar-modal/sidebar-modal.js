import React from "react";

import "./index.css";

import Home from "./home";
import Modal from "./modal";
import SideBar from "./SideBar";
import { AppProvider } from "./context";

const SideBarAndModal = () => {
  document.title = "SideBar & Modal";
  return (
    <>
      <AppProvider>
        <Home />
        <Modal />
        <SideBar />
      </AppProvider>
    </>
  );
};

export default SideBarAndModal;
