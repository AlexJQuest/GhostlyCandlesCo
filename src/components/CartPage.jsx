import React from 'react';
import './CartPage.css'; // Ensure this path is correct

const CartPage = ({ cart, updateQuantity, removeFromCart }) => (
  <main>
    <section className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-cover" style={{ backgroundImage: `url(${item.image})` }}>
                <h3>{item.name}</h3>
                <div className="price">{item.price}</div>
              </div>
              <div className="cart-item-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  </main>
);

export default CartPage;
