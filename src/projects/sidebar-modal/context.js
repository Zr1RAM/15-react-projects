import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleIsModalOpen = (val) => {
    setIsModalOpen(val);
  };
  const toggleIsSidebarOpen = (val) => {
    setIsSidebarOpen(val);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        toggleIsModalOpen,
        toggleIsSidebarOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
