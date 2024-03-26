import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import './product.css';

const ProductPage = () => {
  const [cart, setCart] = useState(() =>{
    const savedCart =JSON.parse(localStorage.getItem('cart'));
    return Array.isArray(savedCart) ? savedCart : [];
  });


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
      <Header /> 
      <table>
          <tr>
            <td><ProductList addToCart={addToCart} /></td>
            <td style={{ verticalAlign: 'top' }}><Cart cart={cart} removeFromCart={removeFromCart} /></td>
          </tr>
      </table>  
      <Footer />
    </div>
  );
};

export default ProductPage;
