
import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  return (
    <div className="w-80">
      <h2 className="text-xl font-bold mb-3">Products</h2>

      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}