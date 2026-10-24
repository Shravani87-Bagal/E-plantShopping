import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Easy Care Plants",
    price: 15,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b30?auto=format&fit=crop&w=600&q=80",
    description: "A beautiful, low-maintenance plant for your home.",
  },
  {
    id: 2,
    name: "ZZ Plant",
    category: "Easy Care Plants",
    price: 18,
    image: "https://images.unsplash.com/photo-1632207691143-643e2b2c1a0b?auto=format&fit=crop&w=600&q=80",
    description: "A hardy plant with glossy green leaves.",
  },
  {
    id: 3,
    name: "Peace Lily",
    category: "Easy Care Plants",
    price: 22,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
    description: "Elegant green foliage for a peaceful atmosphere.",
  },
  {
    id: 4,
    name: "Spider Plant",
    category: "Easy Care Plants",
    price: 12,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
    description: "A cheerful leafy plant for shelves and desks.",
  },
  {
    id: 5,
    name: "Pothos",
    category: "Easy Care Plants",
    price: 14,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
    description: "A trailing plant that adds greenery to any room.",
  },
  {
    id: 6,
    name: "Aloe Vera",
    category: "Easy Care Plants",
    price: 16,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A distinctive succulent with fleshy green leaves.",
  },
  {
    id: 7,
    name: "Monstera",
    category: "Tropical Plants",
    price: 28,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
    description: "Large tropical leaves make a striking statement.",
  },
  {
    id: 8,
    name: "Areca Palm",
    category: "Tropical Plants",
    price: 30,
    image: "https://images.unsplash.com/photo-1597055181300-a8c4f6b5c3e8?auto=format&fit=crop&w=600&q=80",
    description: "Bring a lush tropical feeling to your space.",
  },
  {
    id: 9,
    name: "Bird of Paradise",
    category: "Tropical Plants",
    price: 35,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
    description: "A bold plant with large, architectural leaves.",
  },
  {
    id: 10,
    name: "Rubber Plant",
    category: "Tropical Plants",
    price: 26,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "Glossy foliage with a rich green appearance.",
  },
  {
    id: 11,
    name: "Calathea",
    category: "Tropical Plants",
    price: 24,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
    description: "Decorative foliage that brings visual interest.",
  },
  {
    id: 12,
    name: "Philodendron",
    category: "Tropical Plants",
    price: 20,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A versatile tropical favorite for plant lovers.",
  },
  {
    id: 13,
    name: "Jade Plant",
    category: "Succulents",
    price: 13,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
    description: "A compact succulent with thick, rounded leaves.",
  },
  {
    id: 14,
    name: "Echeveria",
    category: "Succulents",
    price: 10,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
    description: "A charming rosette-shaped succulent.",
  },
  {
    id: 15,
    name: "Haworthia",
    category: "Succulents",
    price: 11,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
    description: "A small succulent that fits neatly on a desk.",
  },
  {
    id: 16,
    name: "String of Pearls",
    category: "Succulents",
    price: 17,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
    description: "A trailing succulent with bead-like leaves.",
  },
  {
    id: 17,
    name: "Cactus",
    category: "Succulents",
    price: 9,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
    description: "A sculptural plant for a sunny windowsill.",
  },
  {
    id: 18,
    name: "Burro's Tail",
    category: "Succulents",
    price: 19,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A distinctive trailing succulent.",
  },
];

function ProductList({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <main className="products-page">
      <div className="products-heading">
        <p className="section-label">FIND YOUR GREEN</p>
        <h1>Our Plant Collection</h1>
        <p>Discover plants that make your space feel alive.</p>
      </div>

      <button
        className="back-button"
        onClick={onContinueShopping}
      >
        ← Back to Home
      </button>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isInCart = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <article className="plant-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                      loading="lazy"
                    />

                    <div className="plant-card-content">
                      <h3>{plant.name}</h3>

                      <p className="plant-description">
                        {plant.description}
                      </p>

                      <p className="plant-price">
                        ${plant.price.toFixed(2)}
                      </p>

                      <button
                        className="add-button"
                        disabled={isInCart}
                        onClick={() => dispatch(addItem(plant))}
                      >
                        {isInCart ? "Added to Cart ✓" : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;