import React, { useState } from "react";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const goHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToProducts = () => {
    setCurrentPage("products");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToCart = () => {
    setCurrentPage("cart");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      {currentPage !== "home" && (
        <header className="site-header">
          <button className="brand-button" onClick={goHome}>
            <span className="brand-icon">🌿</span>
            <span>Paradise Nursery</span>
          </button>

          <nav className="main-navigation">
            <button onClick={goHome}>Home</button>
            <button onClick={goToProducts}>Plants</button>
            <button className="nav-cart-button" onClick={goToCart}>
              🛒 Cart
              <span className="cart-count">{totalQuantity}</span>
            </button>
          </nav>
        </header>
      )}

      {currentPage === "home" && (
        <>
          <main className="hero-section">
            <div className="hero-content">
              <p className="hero-eyebrow">BRING NATURE HOME</p>

              <h1>
                Paradise Nursery
                <br />
                <span>Grow Your Own Paradise</span>
              </h1>

              <p className="hero-description">
                Discover beautiful houseplants that bring life, freshness,
                and happiness into your home. Find your perfect plant and
                start growing your own green sanctuary.
              </p>

              <button
                className="primary-button hero-button"
                onClick={goToProducts}
              >
                Get Started →
              </button>

              <div className="hero-highlights">
                <span>🌱 Carefully selected plants</span>
                <span>🌿 Greener everyday living</span>
              </div>
            </div>
          </main>

          <AboutUs />

          <section className="home-cta">
            <p className="section-label">YOUR GREEN JOURNEY STARTS HERE</p>
            <h2>Find the plant that feels like home.</h2>
            <button className="primary-button" onClick={goToProducts}>
              Explore Our Plants
            </button>
          </section>
        </>
      )}

      {currentPage === "products" && (
        <>
          <header className="page-navigation">
            <button onClick={goHome}>← Home</button>

            <button className="nav-cart-button" onClick={goToCart}>
              🛒 Cart
              <span className="cart-count">{totalQuantity}</span>
            </button>
          </header>

          <ProductList onContinueShopping={goHome} />
        </>
      )}

      {currentPage === "cart" && (
        <>
          <header className="page-navigation">
            <button onClick={goHome}>← Home</button>
            <button onClick={goToProducts}>Continue Shopping</button>
          </header>

          <CartItem
            onContinueShopping={goToProducts}
            onGoHome={goHome}
          />
        </>
      )}

      <footer className="site-footer">
        <p>🌿 Paradise Nursery</p>
        <p>Bringing nature closer to you, one plant at a time.</p>
        <small>© {new Date().getFullYear()} Paradise Nursery. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;