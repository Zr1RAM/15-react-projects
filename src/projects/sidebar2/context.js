import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  const toggleSidebar = (val) => {
    setIsSidebarOpen(val);
  };

  const toggleSubmenu = (val, text = "", coordinates = {}) => {
    if (val) {
      const page = sublinks.find((link) => link.page === text);
      setPage(page);
      setLocation(coordinates);
    }
    setIsSubmenuOpen(val);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        toggleSidebar,
        toggleSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
