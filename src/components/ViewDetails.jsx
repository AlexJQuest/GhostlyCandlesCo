import React from 'react';
import { useLocation } from 'react-router-dom';
import './ViewDetails.css'; // Make sure to create a CSS file for styling

const ProductDetails = () => {
    const location = useLocation();
    const { image, name, price, description } = location.state || {}; // Destructure product details

    return (
        <div className="product-details">
            <main className="details-container">
                <div className="image-section">
                    <img
                        src={image} // Use the passed image
                        alt={name} // Use the passed name for alt text
                        className="product-image"
                    />
                </div>

                <div className="info-section">
                    <h2 className="product-title">{name}</h2> {/* Use the passed name */}
                    <p className="product-description">
                        {description} {/* Use the passed description */}
                    </p>
                    <p className="product-price">R{parseFloat(price).toFixed(2)}</p> {/* Format price */}
                    <button className="buy-button">Add to Cart</button>
                </div>
            </main>
        </div>
    );
};

export default ProductDetails;
