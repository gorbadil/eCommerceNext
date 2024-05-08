import { Product } from "./Product";

export type BasketContextValueType = {
  basket: Product[];
  setBasket: React.Dispatch<React.SetStateAction<Product[]>>;
  totalItem: number;
};
