"use client";

import { useBasket } from "../../../context/BasketContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export function Navbar() {
  const { basket } = useBasket();
  const totalItem = basket.reduce(
    (acc: any, item: any) => acc + item.quantity,
    0
  );
  const pathname = usePathname();
  return (
    <div className="flex justify-around px-10 py-4 bg-primary text-primary-foreground font-bold">
      <Link className={` ${pathname === "/" ? "active" : "link"}`} href={"/"}>
        Merhaba
      </Link>

      <Link
        className={`${pathname === "/category" ? "active" : "link"}`}
        href={"/category"}
      >
        Category
      </Link>
      <Link
        className={`${pathname === "/productDetails" ? "active" : "link"}`}
        href={"/productDetails"}
      >
        ProductDetails
      </Link>
      <Link
        className={`${pathname === "/products" ? "active" : "link"}`}
        href={"/products"}
      >
        Products
      </Link>
      <Link
        className={`${pathname === "/basket" ? "active" : "link"} relative`}
        href={"/basket"}
      >
        Basket{" "}
        {basket.length === 0 ? null : (
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-green-500 border-1 border-white rounded-full -top-2 -end-6 dark:border-gray-900">
            {totalItem}
          </div>
        )}
      </Link>
    </div>
  );
}
