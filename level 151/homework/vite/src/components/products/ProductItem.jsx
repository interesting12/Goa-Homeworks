export default function ProductItem({ product }) {
  return (
    <div className="border p-3 rounded-xl mb-2">
      <h3 className="font-bold">{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p className={product.inStock ? "text-green-600" : "text-red-600"}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}