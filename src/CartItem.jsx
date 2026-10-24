import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

function CartItem({ onContinueShopping, onGoHome }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (item, quantity) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity,
      })
    );
  };

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <p className="section-label">YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
        <p>
          {totalQuantity} {totalQuantity === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🪴</div>
          <h2>Your cart is waiting to grow!</h2>
          <p>You haven't added any plants yet.</p>

          <button className="primary-button" onClick={onContinueShopping}>
            Explore Plants
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <article className="cart-item-card" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p className="cart-item-category">{item.category}</p>
                  <p className="cart-item-price">
                    ${item.price.toFixed(2)} each
                  </p>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() =>
                        handleQuantityChange(item, item.quantity - 1)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() =>
                        handleQuantityChange(item, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="remove-button"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>

                <div className="cart-item-subtotal">
                  <span>Subtotal</span>
                  <strong>
                    ${(item.price * item.quantity).toFixed(2)}
                  </strong>
                </div>
              </article>
            ))}
          </div>

          <section className="cart-summary">
            <div className="summary-row">
              <span>Total plants</span>
              <strong>{totalQuantity}</strong>
            </div>

            <div className="summary-row total-row">
              <span>Total price</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>

            <p className="cart-note">
              Thank you for choosing Paradise Nursery!
            </p>

            <div className="cart-actions">
              <button
                className="secondary-button"
                onClick={onContinueShopping}
              >
                Continue Shopping
              </button>

              <button className="primary-button" onClick={onGoHome}>
                Back to Home
              </button>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default CartItem;