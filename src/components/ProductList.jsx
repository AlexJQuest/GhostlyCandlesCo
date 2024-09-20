import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; // Import your ProductCard component
import './ProductList.css';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products'); // Full URL
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data); // Assuming data is an array of products
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error loading products:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.Item_ID} // Use Item_ID for the key
          id={product.Item_ID}
          image={product.Item_Img} // Correct image property
          name={product.Item_Name}
          price={product.Item_ScentedPrice} // Use the scented price by default
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
