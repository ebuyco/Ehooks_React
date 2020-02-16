import React from 'react';

const ProductList = props => {
  const deleteProduct = index => {
    props.deleteProduct(index);
  };
  return (
    <div className="productList__Wrapper">
      {props.products
        ? props.products.map((value, index) => (
            <div
              key={index}
              onClick={() => props.history.push(`/products${value.slug}`)}
              className="productList__Subwrapper"
            >
              <img src={value.image} />
              <h2>{value.name}</h2>
              <p className="description">{value.description}</p>
              <p className="price">${value.price}</p>
              <button
                onClick={e => {
                  deleteProduct(index);
                  e.stopPropagation();
                }}
              >
                ⓧ
              </button>
            </div>
          ))
        : 'No Products'}
    </div>
  );
};

export default ProductList;
