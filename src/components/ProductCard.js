import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product, showRemoveButton, onRemove }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="product-card"
    >
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
      {showRemoveButton && <button onClick={onRemove}>Remove</button>}
    </motion.div>
  );
};

export default ProductCard;
