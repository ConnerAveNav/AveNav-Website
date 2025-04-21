// script.js

// Store cart items in an array
let cart = [];

// Function to add item to cart
function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  renderCart();
}

// Function to render cart items in the cart section
function renderCart() {
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Example product event listeners
// You can hook these up to product buttons in your HTML
// document.querySelector("#product1-button").addEventListener("click", () => addToCart("Product 1", 29.99));

// Mobile Navigation Toggle (Hamburger Menu)
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (mobileNavToggle) {
  mobileNavToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
