import React from 'react'

const SingleProduct = props => {
  const addToCart = () => {
    props.addToCart({ product: props.product, quantity: 1 });
  };

  return (
    <div className="singleProducts__Wrapper">
      <img src={props.product.image} />
      <h2>{props.product.image}</h2>
      <p className="description">{props.product.description}</p>
      <p className="price">${props.product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default SingleProduct;
