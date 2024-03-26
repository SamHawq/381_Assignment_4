import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products';

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {productsData.map((product, index) => (
        <ProductItem key={index} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
