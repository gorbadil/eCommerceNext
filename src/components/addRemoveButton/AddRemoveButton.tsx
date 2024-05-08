"use client";

import { useBasket } from "@/context/BasketContext";
import { Product } from "@/types/Product";

function AddRemoveButton({ product }: { product: Product }) {
  const { basket, setBasket } = useBasket();
  let quantity = 0;
  basket.map((item: any) => {
    if (item.id === product.id) {
      quantity = item.quantity;
    }
  });
  const handleAddToCart = () => {
    let newBasket = [...basket];
    let isExist = false;
    newBasket.map((item: any) => {
      if (item.id === product.id) {
        item.quantity += 1;
        isExist = true;
      }
    });
    if (!isExist) {
      newBasket.push({ ...product, quantity: 1 });
    }
    setBasket(newBasket);
  };

  const handleRemoveFromCart = () => {
    let newBasket = [...basket];
    newBasket.map((item: any) => {
      if (item.id === product.id) {
        item.quantity -= 1;
      }
    });
    setBasket(newBasket.filter((item: any) => item.quantity > 0));
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col justify-center items-center h-12">
        <span className="text-3xl font-bold text-gray-900 dark:text-white m-4">
          ${product.price}
        </span>
        {quantity > 0 && <span className="font-bold">Basket: {quantity}</span>}
      </div>
      <div className="flex flex-col gap-4 w-24 h-12">
        <span
          className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleAddToCart}
        >
          Add
        </span>
        {quantity > 0 && (
          <span
            className="text-white cursor-pointer bg-red-400 hover:bg-red-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleRemoveFromCart}
          >
            Remove
          </span>
        )}
      </div>
    </div>
  );
}

export default AddRemoveButton;
