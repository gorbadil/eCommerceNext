import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBasketShopping } from "react-icons/fa6";
import { useBasket } from "@/context/BasketContext";

function Hamburger({ setHamburgerOpen }: { setHamburgerOpen: any }) {
  const { totalItem } = useBasket();
  const pathname = usePathname();
  return (
    <div
      className="md:hidden flex flex-col items-end gap-2"
      onClick={(prev) => setHamburgerOpen(!prev)}
    >
      <Link className={` ${pathname === "/" ? "active" : "link"}`} href={"/"}>
        eCommerce
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
  );
}

export default Hamburger;
