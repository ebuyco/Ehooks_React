import styled from 'styled-components';

const AddProductStyle = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;

  .form--addProduct {
    width: 100%;
    margin: 0 auto;
    color: #000;
    background-color: #fff;
    padding: 2rem;
  }
  .add__products__caption {
    text-align: center;
    margin-top: 2rem;
    color: #000000;
  }
  .addProduct__wrapper__name,
  .addProduct__wrapper__price,
  .addProduct__wrapper__description,
  .addProduct__wrapper__image {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button__Addproduct {
    margin: 0 auto;
    padding: 0.333rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 20%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3e50b4;
    cursor: pointer;
    color: #fff;
    border: none;
  }
`;

export default AddProductStyle;
