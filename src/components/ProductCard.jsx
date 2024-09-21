// ProductCard.jsx
import React from 'react'; 
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, name, price, description, addToCart }) => {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="card">
        <div 
          className='cover item-a' 
          style={{ backgroundImage: `url(${image})` }} // Set the background image here
        >
          <h1>{name}</h1>
          <span className="price">R{parseFloat(price).toFixed(2)}</span>
          <div className="card-back">
            <Link 
              to="/ViewDetails" 
              state={{ image, name, price, description }} // Pass product details as state
              onClick={() => addToCart({
                Item_ID: id,
                Item_Img: image,
                Item_Name: name,
                Item_Price: parseFloat(price),
                Item_Desc: description,
              })}
            >
              View Details 
            </Link>

            <a href="#AddtoCart" onClick={() => addToCart({
                Item_ID: id,
                Item_Img: image,
                Item_Name: name,
                Item_Price: parseFloat(price),
                Item_Desc: description,
              })
            }>
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
