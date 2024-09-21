import React, { useEffect, useRef } from 'react';
import './CartPage.css'; // Ensure this CSS file is in place

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + (item.Item_Price * item.quantity), 0);
  const paypalButtonRef = useRef(); // Create a ref for the PayPal button

  // PayPal Checkout function
  const handleCheckout = () => {
    if (window.paypal) { // Check if PayPal is loaded
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: totalPrice.toFixed(2) // Use total price
              }
            }]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          alert('Transaction completed by ' + order.payer.name.given_name);
          // Here you could also redirect to a success page or handle the order further
        },
        onError: (err) => {
          console.error("Error with PayPal checkout:", err);
          alert('An error occurred during the transaction.');
        }
      }).render(paypalButtonRef.current); // Render the PayPal button in the ref container
    } else {
      console.error("PayPal SDK not loaded");
    }
  };

  useEffect(() => {
    handleCheckout(); // Initialize the PayPal button on component mount
  }, [cart]);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.Item_ID} className="cart-item">
              <img src={item.Item_Img} alt={item.Item_Name} />
              <div className="item-details">
                <h3>{item.Item_Name}</h3>
                <p>Price: R{item.Item_Price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Description: {item.Item_Desc}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.Item_ID, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.Item_ID, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(item.Item_ID)}>Remove from Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</h3>
        <h3>Total Price: R{totalPrice.toFixed(2)}</h3>
      </div>
      {/* PayPal button container using ref */}
      <div ref={paypalButtonRef}></div>
      
      {/* Checkout Button */}
      <div className="checkout-container">
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout with PayPal
        </button>
      </div>
    </div>
  );
};

export default CartPage;
