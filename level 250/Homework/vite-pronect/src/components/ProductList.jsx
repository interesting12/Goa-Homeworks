import { useCart } from "../store/cartStore";

const products = [
  { id: 1, name: "Phone" },
  { id: 2, name: "Laptop" },
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div>
      {products.map((p) => (
        <button key={p.id} onClick={() => addToCart(p)}>
          Add {p.name}
        </button>
      ))}
    </div>
  );
}
