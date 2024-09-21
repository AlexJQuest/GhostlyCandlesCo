// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CartPage from './components/CartPage';
import ProductList from './components/ProductList';
import Hero from './components/Hero.jsx';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.Item_ID === product.Item_ID);
      if (existingProduct) {
        return prevCart.map(item =>
          item.Item_ID === product.Item_ID
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart((prevCart) => 
      prevCart.map(item =>
        item.Item_ID === itemId ? { ...item, quantity: newQuantity } : item
      ).filter(item => item.quantity > 0) // Remove items with quantity 0
    );
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.Item_ID !== itemId));
  };

  return (
    <Router>
      <div className='container'>
        <Header cart={cart} />
        <div className='BGwallpaper'>
          <Routes>
          Hero
          <Route path="/" element={<Hero addToCart={addToCart} />} />
            <Route path="/Products" element={<ProductList addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const Header = ({ cart }) => (
  <header>
    <div className="container">
      <h1>Ghostly Candle Co.</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li>
            <Link to="/cart">
              <button className="cart-button">
                Cart ({cart.length})
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer>
    <div className="container">
      <p>&copy; 2024 Ghostly Candle Co. All rights reserved.</p>
    </div>
  </footer>
);

export default App;
