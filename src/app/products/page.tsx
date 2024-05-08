import Card from "@/components/myComponents/card/Card";
import axios from "axios";
import { Product } from "@/types/Product";

async function Products() {
  const res = await axios.get("https://dummyjson.com/products");
  const products: Product[] = res.data.products;
  return (
    <div className="flex flex-wrap justify-center align-middle gap-10 p-10">
      {products.map((product: any) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
