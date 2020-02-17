import React from 'react';

const SingleProduct = props => {
  const addToCart = () => {
    props.addToCart({ product: props.product, quantity: 1 });
  };

  return (
    <div className="single__product__wrapper">
      <img
        className="image__singleProduct"
        src={props.product.image}
        alt="image__singleProduct"
      />
      <h2>{props.product.name}</h2>
      <p className="description__single__product">
        {props.product.description}
      </p>
      <p className="price__single__product">${props.product.price}</p>
      <button type="submit" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProduct;
