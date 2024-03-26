import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} removeFromCart={removeFromCart} />
      ))}
      <h3>Total: {calculateTotal(cart)}</h3>
    </div>
  );
};

const calculateTotal = (cart) => {
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
  });
  return total;
};

export default Cart;
