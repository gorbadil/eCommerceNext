"use client";
import React from "react";
import { Product } from "../../../types/Product";
import Image from "next/image";

function BasketCard({ product }: { product: Product }) {
  return (
    <div className="bg-slate-100 flex flex-col lg:flex-row py-2 justify-between px-16">
      <Image
        className="object-cover aspect-square m-2 rounded-lg self-center"
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={200}
      />
      <div className="w-full lg:w-1/2 m-2 flex flex-col justify-center lg:items-start items-center">
        <h2 className="font-bold text-xl mb-6"> {product.title} </h2>
        <p className="text-wrap"> {product.description} </p>
      </div>
      <div className="flex flex-row lg:flex-col lg:justify-center justify-between px-10 lg:px-0 lg:items-end">
        <h2 className="font-bold text-xl mb-6"> $ {product.price} </h2>
        <h2>Quantity: {product.quantity} </h2>
      </div>
    </div>
  );
}

export default BasketCard;
