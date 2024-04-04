import React, { createContext, useContext, useState } from 'react';

const ClientNameContext = createContext();

export const ClientNameProvider = ({ children }) => {
  const [clientName, setClientName] = useState('');

  return (
    <ClientNameContext.Provider value={{ clientName, setClientName }}>
      {children}
    </ClientNameContext.Provider>
  );
};

export const useClientName = () => useContext(ClientNameContext);
