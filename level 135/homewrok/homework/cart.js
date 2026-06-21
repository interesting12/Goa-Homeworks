let cart = [];

export function addToCart(product) {
  cart.push(product);
  renderCart();
}

function getTotal() {
  return cart.reduce((sum, p) => sum + p.price, 0);
}

export function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";
  cart.forEach((item, i) => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - ₾${item.price}`;
    container.appendChild(div);
  });
  document.getElementById("total-price").textContent = getTotal();
}
