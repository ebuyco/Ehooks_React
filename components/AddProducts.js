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
      slug: slugify(name),
    });
    props.history('/');
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
    <>
      <form className="form__addProducts" onSubmit={addProduct}>
        <h1 className="addProducts__Title">Add Products</h1>
        <div className="addProducts__Name__Wrapper">
          <label>Name:</label>
          <input required onChange={handleChangeName} />
        </div>
        <div className="addProducts__Price__Wrapper">
          <label>Price in $:</label>
          <input required onChange={handleChangePrice} />
        </div>
        <div className="addProducts__Description__Wrapper">
          <label>Description:</label>

          <input required onChange={handleChangeDescription} />
        </div>
        <div className="addProducts__Image__Wrapper">
          <label>Image URL:</label>
          <input required onChange={handleChangeImage} />
        </div>
        <input type="submit" value="Add" className="button" />
      </form>
    </>
  );
};

export default AddProduct;
