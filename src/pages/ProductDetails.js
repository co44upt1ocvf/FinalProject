import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext.js';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToFavorites, addToCart } = useAppContext();

  useEffect(() => {
    axios.get(`http://localhost:1337/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="product-details"
    >
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToFavorites(product)}>Add to Favorites</button>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </motion.div>
  );
};

export default ProductDetails;
