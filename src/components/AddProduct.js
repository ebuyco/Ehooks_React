import React, { useState } from 'react';
import slugify from '../utils/slugify';

const AddProduct = props => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  const addProduct = e => {
    e.preventDefault();
    props.addProduct({
      name,
      price,
      description,
      image,
      slug: slugify(),
    });
    props.history.push('/');
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangePrice = e => {
    setPrice(e.target.value);
  };

  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };

  const handleChangeImage = e => {
    setImage(e.target.value);
  };

  return (
    <div className="addProduct__wrapper">
      <form onSubmit={addProduct} className="form--addProduct">
        <h1>Add Product</h1>
        <div className="addProduct__wrapper__name">
          <label>Name:</label>
          <input required onChange={handleChangeName} />
        </div>
        <div className="addProduct__wrapper__price">
          <label>Price in $</label>
          <input required onChange={handleChangePrice} />
        </div>
        <div className="addProduct__wrapper__description">
          <label>Description:</label>{' '}
          <input required onChange={handleChangeDescription} />
        </div>
        <div className="addProduct__wrapper__image">
          <label>Image URL:</label>
          <input required onChange={handleChangeImage} />
        </div>
        <input type="submit" value="Add" className="button__Addproduct" />
      </form>
    </div>
  );
};

export default AddProduct;
