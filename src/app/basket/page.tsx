"use client";

import BasketCard from "../../components/myComponents/basketCard/BasketCard";
import { useBasket } from "@/context/BasketContext";

function Basket() {
  const { basket } = useBasket();
  return (
    <div className="flex flex-col px-24 py-12 gap-6">
      {basket.map((product: any) => (
        <BasketCard key={product.id} product={product} />
      ))}

      <div className="flex justify-between bg-slate-200 py-2 px-12">
        <h2 className="font-bold text-xl">Total</h2>
        <h2 className="font-bold text-xl">
          $ {basket.reduce((acc: any, item: any) => acc + item.price, 0)}
        </h2>
      </div>

      <div className="flex justify-end">
        <button className="bg-primary text-primary-foreground font-bold p-4 rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Basket;
