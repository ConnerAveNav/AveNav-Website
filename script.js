// --- CART DATA & DOM REFS ---
let cart = [];
const cartCountEl   = document.getElementById('cart-count');
const cartItemsEl   = document.getElementById('cart-items');
const cartTotalEl   = document.getElementById('cart-total');
const cartButton    = document.getElementById('cart-button');
const cartOverlay   = document.getElementById('cart-overlay');
const cartPanel     = document.getElementById('cart-panel');
const cartCloseBtn  = document.getElementById('cart-close');
const checkoutBtn   = document.getElementById('checkout-button');

// --- OPEN/CLOSE CART PANEL ---
function openCart() {
  cartOverlay.classList.remove('hidden');
  cartPanel.classList.remove('hidden');
}
function closeCart() {
  cartOverlay.classList.add('hidden');
  cartPanel.classList.add('hidden');
}
cartButton.addEventListener('click', openCart);
cartOverlay.addEventListener('click', closeCart);
cartCloseBtn.addEventListener('click', closeCart);

// --- ADD TO CART & RENDERING ---
function addToCart(name, price) {
  console.log(`Adding to cart: ${name} for $${price}`);  // Debug log
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  // update item count
  cartCountEl.textContent = cart.length;

  // clear list & rebuild
  cartItemsEl.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} — $${item.price.toFixed(2)}`;
    cartItemsEl.appendChild(li);
    total += item.price;
  });
  cartTotalEl.textContent = total.toFixed(2);
}

// --- CHECKOUT ---
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  // For now, just clear the cart:
  alert('Thank you for your purchase!');
  cart = [];
  renderCart();
  closeCart();
});

// --- INITIAL RENDER ---
renderCart();
