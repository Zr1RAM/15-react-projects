import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  // console.log(useGlobalContext());
  const { toggleIsModalOpen, toggleIsSidebarOpen } = useGlobalContext();

  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => toggleIsSidebarOpen(true)}
      >
        <FaBars />
      </button>
      <button className="btn" onClick={() => toggleIsModalOpen(true)}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
