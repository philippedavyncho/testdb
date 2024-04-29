import { createContext, useContext, useState} from 'react';

const OrderContext = createContext();

export function useOrderContext() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }) {
  const [orderSuccess, setOrderSuccess] = useState(false);
  

  return (
    <OrderContext.Provider value={{ orderSuccess, setOrderSuccess }}>
      {children}
    </OrderContext.Provider>
  );
}