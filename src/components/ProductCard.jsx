import React from 'react'; 
import './ProductCard.css';

const ProductCard = ({ id, image, name, price, description, addToCart }) => {
  console.log("This is the link:", image); // Log the final image URL

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
            <a href="ViewDetails" onClick={() => addToCart({
                Item_ID: id,
                Item_Img: image,
                Item_Name: name,
                Item_Price: parseFloat(price),
                Item_Desc: description,
              })
            }>
              View Details
            </a>
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
