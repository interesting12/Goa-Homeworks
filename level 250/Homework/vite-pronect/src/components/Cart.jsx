import { useCart } from "../store/cartStore";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h3>Cart</h3>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => removeFromCart(item.id)}>X</button>
        </div>
      ))}

      {cart.length > 0 && (
        <button onClick={clearCart}>Clear cart</button>
      )}
    </div>
  );
}
