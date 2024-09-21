import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'; // Import the CSS file


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



  function convertToRawGithubUrl(githubUrl) {
    if (githubUrl.includes("github.com") && githubUrl.includes("/blob/")) {
      return githubUrl.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
    }
    return githubUrl; // return the original URL if it's not a valid GitHub URL
  }

  return (
    <section>
      <div className="product-container"> {/* Apply the class here */}
        {
        products.map(product => {
          console.log("ImageURL:", convertToRawGithubUrl(product.Item_Img)); // Log the final image URL
          const finalurl = convertToRawGithubUrl(product.Item_Img);
          return (
            <div key={product.Item_ID} className="col-md-4 col-sm-6 col-xs-12">
              <ProductCard 
                id={product.Item_ID} 
                image={finalurl} // Use the generated image URL or a test image
                name={product.Item_Name} 
                price={product.Item_ScentedPrice || product.Item_UnscentedPrice} 
                description={product.Item_Description} 
                addToCart={addToCart}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
