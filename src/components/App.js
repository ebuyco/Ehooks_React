import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import GlobalStyle from '../styles/Global';
import AddProduct from './AddProduct';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import ProductList from './ProductsList';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')) || []);
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  const addProduct = product => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const deleteProduct = index => {
    const updatedProducts = [...products];
    updatedProducts = updatedProducts
      .slice(0, index)
      .concat(updatedProducts.slice(index + 1, updatedProducts.length));
    setProducts(updatedProducts);
    localStorage.setitem('products', JSON.stringify(updatedProducts));
  };

  const addToCart = ({ product, qunatity }) => {
    const index = cart.findIndex(
      itemInCart => itemInCart.product.slug === product.slug
    );

    const newCart = [];

    if (index === -1) {
      newCart = [...cart, { product, quantity }];
    } else {
      quantity += cart[index].quantity;
      newCart = cart
        .filter(item => item.product.slug !== product.slug)
        .concat({ product, quantity });
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };
  return (
    <Router>
      <div id="app">
        <GlobalStyle />
        <aside>
          <Link to="/">Products</Link>
          <Link to="/add-product">Add Product</Link>
        </aside>
        <main>
          <Cart cart={cart} />
          <Route
            exact
            path="/"
            render={({ history }) => (
              <ProductList
                products={products}
                deleteProduct={deleteProduct}
                history={history}
              />
            )}
          />
          <Route
            path="/add-product"
            render={({ history }) => (
              <AddProduct addProduct={addProduct} history={history} />
            )}
          />
          <Route
            path="/product/:slug"
            render={({ match }) => (
              <SingleProduct
                product={products.find(p => p.slug === match.params.slug)}
                addToCart={addToCart}
              />
            )}
          />
        </main>
      </div>
    </Router>
  );
};

export default App;
