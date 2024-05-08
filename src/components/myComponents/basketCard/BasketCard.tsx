"use client";
import React from "react";
import { Product } from "../../../types/Product";
import Image from "next/image";

function BasketCard({ product }: { product: Product }) {
  console.log(product);
  return (
    <div className="bg-slate-100 flex py-2 justify-between px-16">
      <Image
        className="object-cover aspect-square m-2 rounded-lg"
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={200}
      />
      <div className="w-1/2 m-2 flex flex-col justify-center items-start">
        <h2 className="font-bold text-xl mb-6"> {product.title} </h2>
        <p className="text-wrap"> {product.description} </p>
      </div>
      <div className="flex flex-col justify-center items-end">
        <h2 className="font-bold text-xl mb-6"> $ {product.price} </h2>
        <h2>Quantity: {product.quantity} </h2>
      </div>
    </div>
  );
}

export default BasketCard;
