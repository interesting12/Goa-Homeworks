let cart = [];


function addToCart(productId) {
    const product = getProductById(productId);
    if (product) {
        cart.push(product);
        renderCart();
    }
}

function renderCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = ''; 

    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        itemDiv.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(itemDiv);
    });

    const totalPrice = getTotalPrice();
    const totalPriceDiv = document.getElementById("total-price");
    totalPriceDiv.innerHTML = `Total Price: $${totalPrice}`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}

function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price, 0);
}
