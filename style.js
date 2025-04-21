/* Reset and base styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #121212;
  color: #f0f0f0;
}

/* Header styles */
header {
  background-color: #1f1f1f;
  padding: 1rem 2rem;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #00bcd4;
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #00bcd4;
}

/* Hero section */
.hero {
  position: relative;
  text-align: center;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  opacity: 0.8;
  filter: brightness(0.6);
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-shadow: 0 2px 5px #000;
}

.hero-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-text button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.hero-text button:hover {
  background-color: #008fa1;
}

/* Section styling */
section {
  padding: 2rem;
  border-bottom: 1px solid #333;
}

/* Product cards */
.product {
  background-color: #1e1e1e;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease;
}

.product:hover {
  transform: scale(1.02);
}

.product button {
  padding: 0.5rem 1rem;
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.product button:hover {
  background-color: #008fa1;
}

/* Placeholder image box */
.image-placeholder {
  width: 100%;
  height: 200px;
  background-color: #333;
  color: #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  border-radius: 5px;
  font-style: italic;
}

/* Cart styles */
#cart-list {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

#checkout button {
  padding: 0.75rem 1.5rem;
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

#checkout button:hover {
  background-color: #008fa1;
}
