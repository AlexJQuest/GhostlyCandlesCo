import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

// Utility function to extract the Google Drive ID from the URL
const getDriveIdFromUrl = (url) => {
  const match = url.match(/\/file\/d\/([^\/]+)/);
  return match ? match[1] : null;
};

// Function to generate the direct image URL
const getDirectImageUrl = (driveId) => `https://drive.google.com/uc?id=${driveId}`;

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section>
      <div className="row">
        {products.map(product => {
          const driveId = product.Item_Img ? getDriveIdFromUrl(product.Item_Img) : null;
          const imageUrl = driveId ? getDirectImageUrl(driveId) : null;
          const testimg = 'https://raw.githubusercontent.com/AlexJQuest/GhostlyCandlesCo/main/src/images/1000118736.jpg'
          console.log("ImageURL:", imageUrl); // Log the final image URL

          return (
            <div key={product.Item_ID} className="col-md-4 col-sm-6 col-xs-12">
              <ProductCard 
                id={product.Item_ID} 
                image={testimg} // Use the generated image URL or a test image
                name={product.Item_Name} 
                price={product.Item_ScentedPrice || product.Item_UnscentedPrice} 
                description={product.Item_Description} 
                addToCart={addToCart}
              />
              {/* Optional: Displaying the image directly for debugging */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
