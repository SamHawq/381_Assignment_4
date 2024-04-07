import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import ProductPage from './ProductPage';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const toggleDetails = (productId) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, showDetails: !product.showDetails };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} toggleDetails={toggleDetails}/>
      ))}
    </div>
  );
};

export default ProductList;
