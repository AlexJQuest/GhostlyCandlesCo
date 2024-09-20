import React from 'react';
import './ProductCard.css';

const ProductCard = ({ id, image, name, price, addToCart }) => {
  const itemClass = `cover item-${id}`;

  // Function to convert Google Drive link to direct image link
  const convertToDirectLink = (url) => {
    const match = url.match(/\/d\/(.*?)(\/|$)/);
    return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
  };

  const directImageUrl = convertToDirectLink(image);

  return (
    <div className="card">
      <div className={itemClass}>
        <img
          src={directImageUrl}
          alt={name}
          className="product-image"
          onError={(e) => { e.target.src = 'https://drive.google.com/file/d/1Nql9ksSn4ocqfT-zI2v3XqH8-RW5yp0V/view?usp=drive_link'; }} // Fallback image
        />
        <h1>{name}</h1>
        <div className="price">${price}</div>
        <div className="card-back">
          <button
            onClick={() => addToCart({
              Item_ID: id,
              Item_Img: directImageUrl,
              Item_Name: name,
              Item_Price: parseFloat(price),
            })}
            aria-label={`Add ${name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
