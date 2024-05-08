import { Product } from "@/types/Product";
import axios from "axios";
import Card from "../card/Card";
import Link from "next/link";

async function HeroProduct() {
  const response = await axios.get(
    "https://dummyjson.com/products/search?q=Laptop"
  );
  const data = response.data.products;

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 py-12 container">
      {data.map((product: Product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default HeroProduct;
