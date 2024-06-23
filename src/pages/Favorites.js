import React from 'react';
import ProductCard from '../components/ProductCard.js';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext.js';

const Favorites = () => {
    const { favorites } = useAppContext();
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="favorites"
      >
        <h1>Favorites</h1>
        <div className="product-list">
          {favorites.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.div>
    );
};

export default Favorites;
