"use client";

import { createContext, useContext, useState } from "react";

export const BasketContext = createContext<any>(null);
import { Product } from "../types/Product";

const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [basket, setBasket] = useState<Product[]>([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { useBasket, BasketProvider };
