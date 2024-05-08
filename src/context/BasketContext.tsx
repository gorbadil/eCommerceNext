"use client";

import { createContext, useContext, useState } from "react";

export const BasketContext = createContext<any>(null);
import { Product } from "../types/Product";
import { BasketContextValueType } from "@/types/BasketContext";

const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [basket, setBasket] = useState<Product[]>([]);
  const totalItem = basket.reduce(
    (acc: any, item: any) => acc + item.quantity,
    0
  );
  const data: BasketContextValueType = { basket, setBasket, totalItem };

  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { useBasket, BasketProvider };
