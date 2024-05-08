import Image from "next/image";

import HeroProducts from "../components/myComponents/heroProduct/HeroProduct";
import Hero from "@/components/myComponents/hero/Hero";

export default function Home() {
  return (
    <div className="pt-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center">
          A simple ECommerce Landing Page using NextJS/TypeScript and Tailwind
          CSS
        </p>
      </div>
      <Hero />
      <HeroProducts />
    </div>
  );
}
