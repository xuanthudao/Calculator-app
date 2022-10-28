import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
export const useDarkModeContext = () => useContext(DarkModeContext);