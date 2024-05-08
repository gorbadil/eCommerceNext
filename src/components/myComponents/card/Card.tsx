"use client";

import { Product } from "@/types/Product";
import { useBasket } from "@/context/BasketContext";
import Image from "next/image";

function Card({ product }: { product: Product }) {
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
    <div className="flex flex-col bg-slate-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#" className="flex justify-center items-center">
        <Image
          className="rounded-t-lg aspect-square object-contain"
          src={product.thumbnail}
          width={300}
          height={300}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#" className="flex justify-between">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-wrap w-52">
            {product.title}
          </h5>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {product.rating}
            </span>
          </div>
        </a>

        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center items-center h-12">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            {quantity > 0 && (
              <span className="font-bold">Basket: {quantity}</span>
            )}
          </div>
          <div className="flex flex-col w-24 h-12">
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
      </div>
    </div>
  );
}

export default Card;
