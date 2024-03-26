import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={'/'+item.image} alt={item.name}  style={{ maxWidth: '200px', height: 'auto' }}/>
      <p>{item.name}</p>
      <p>${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.price * item.quantity}</p>
      <button onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
