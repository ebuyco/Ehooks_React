import React from 'react';

/*eslint-disable*/
const ProductList = props => {
  const deleteProduct = index => {
    props.deleteProduct(index);
  };

  return (
    <div className="products__list__wrapper">
      {props.products
        ? props.products.map((value, index) => (
            <div
              key={index}
              onClick={() => props.history.push(`/product${value.slug}`)}
            >
              <img className="image__productsList" src={value.image} />
              <h2>{value.name}</h2>
              <p className="description__productList">{value.description}</p>
              <p className="price__productList">${value.price}</p>
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
        : 'No products'}
    </div>
  );
};

export default ProductList;
