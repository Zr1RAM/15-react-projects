import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, toggleIsModalOpen } = useGlobalContext();
  
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button
          className="close-modal-btn"
          onClick={() => toggleIsModalOpen(false)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
