"use client";

import { useEffect, useState } from "react";
import { useBasket } from "../../../context/BasketContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBasketShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import Hamburger from "./hambuger/Hamburger";

export function Navbar() {
  const { totalItem } = useBasket();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const pathname = usePathname();
  return (
    <div className="fixed w-full px-10 py-4 bg-primary text-primary-foreground font-bold">
      <div className="md:flex hidden justify-between container">
        <Link className={` ${pathname === "/" ? "active" : "link"}`} href={"/"}>
          eCommerce
        </Link>
        <div className="flex justify-center items-center gap-10">
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
            <FaBasketShopping
              className={`text-2xl ${
                totalItem && "text-green-600"
              } transition-all duration-300`}
            />

            <div
              className={`${
                totalItem && "opacity-90"
              } absolute transition-all duration-300 opacity-0 inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-green-500 border-1 border-white rounded-full -top-2 -end-6 dark:border-gray-900`}
            >
              {totalItem}
            </div>
          </Link>
        </div>
      </div>
      <GiHamburgerMenu
        onClick={handleHamburgerClick}
        className=" cursor-pointer md:hidden text-2xl"
      />
      {hamburgerOpen && <Hamburger setHamburgerOpen={setHamburgerOpen} />}
    </div>
  );
}
