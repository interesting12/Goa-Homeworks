import { register, login } from "./auth.js";
import { addToCart } from "./cart.js";
import { products } from "./products.js";

document.getElementById("registerBtn").addEventListener("click", () => {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  register(u, p);
});

document.getElementById("loginBtn").addEventListener("click", () => {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  if (login(u, p)) {
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("store-section").style.display = "block";
    renderProducts();
  }
});

function renderProducts() {
  const container = document.getElementById("products-container");
  products.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${p.name}</strong> - ₾${p.price} {i}
      <button>Add to Cart</button>`;
    div.querySelector("button").addEventListener("click", () => addToCart(p));
    container.appendChild(div);
  });
}
