import React, { useState, useEffect } from 'react';
import Route from 'next/router';
import Link from 'next/link';
import AddProduct from './AddProducts';
import ProductList from './ProductList';
import SingleProduct from './SingleProduct';
import Cart from './Cart';

const MainComponent = () => {
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
    let updatedProducts = [...products];
    updatedProducts = updatedProducts
      .slice(0, index)
      .concat(updatedProducts.slice(index + 1, updatedProducts.length));
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const addToCart = ({ product, quantity }) => {
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
    localStorage.setItem('cart'.JSON.stringify(newCart));
  };

  return (
    <div>
      <aside>
        <Link href="/"><a>Products</a></Link>
        <Link href="/add-product"><a>Add Product</a></Link>
      </aside>
      <main>
        <Cart cart={cart} />
        <Link
          href="/"

        >
        <a>
             <ProductList
              products={products}
              deleteProduct={deleteProduct}

            />
        </a>


        </Link>
        <Link
          href="/add-product"

        >
            <a>
                <AddProduct addProduct={addProduct} />
            </a>


       </Link>
        <Link
          href="/product/:slug"

        >
          <a>

            <SingleProduct
              product={products.find(p => p.slug === match.params.slug)}
              addToCart={addToCart}
            />

          </a>
       </Link>
      </main>
    </div>
  );
};

export default MainComponent;
