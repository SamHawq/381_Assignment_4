import React, { useState, useEffect } from 'react';
//import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
//import Footer from './Footer';

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.map(item =>
      item.name === product.name ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  return (
    <div className="product-page"> 
    {/*
      <Header /> 
      */}
      <table>
        <tbody>
          <tr>
            <td><ProductList addToCart={addToCart} /></td>
            <td style={{ verticalAlign: 'top' }}><Cart cart={cart} removeFromCart={removeFromCart} /></td>
          </tr>
        </tbody>
      </table>
      {/*
      <Footer />
      */}
    </div>
  );
};

export default ProductPage;
