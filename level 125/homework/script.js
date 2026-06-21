const registerForm = document.getElementById('register-form');
const registerPage = document.getElementById('registration-page');
const storePage = document.getElementById('store-page');
const productsContainer = document.getElementById('products');
const cartItemsContainer = document.getElementById('cart-items');
const buyAllButton = document.getElementById('buy-all');
const clearCartButton = document.getElementById('clear-cart');

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let user = JSON.parse(localStorage.getItem('user')) || null;

const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' }
];

function renderProducts() {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

function renderCart() {
    cartItemsContainer.innerHTML = '';
    if (cart.length > 0) {
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.innerHTML = `
                <p>${item.name} - $${item.price}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
        buyAllButton.style.display = 'inline-block';
        clearCartButton.style.display = 'inline-block';
    } else {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        buyAllButton.style.display = 'none';
        clearCartButton.style.display = 'none';
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function buyAll() {
    if (cart.length > 0) {
        alert('Thank you for your purchase!');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        const userData = { username, email, password };
        localStorage.setItem('user', JSON.stringify(userData));
        user = userData;
        registerPage.style.display = 'none';
        storePage.style.display = 'block';
        renderProducts();
        renderCart();
    }
}

if (user) {
    registerPage.style.display = 'none';
    storePage.style.display = 'block';
    renderProducts();
    renderCart();
}

registerForm.addEventListener('submit', registerUser);
buyAllButton.addEventListener('click', buyAll);
clearCartButton.addEventListener('click', clearCart);
