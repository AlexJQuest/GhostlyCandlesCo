// src/Header.js
import React from 'react';
import { useCart } from './CartContext';
import './App.css';

const Header = ({ onCartClick }) => {
  const { cart } = useCart();

  return (
    <header>
      <div className="container">
        <h1>Ghostly Candle Co.</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              <button className="cart-button" onClick={onCartClick}>
                Cart ({cart.length})
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
