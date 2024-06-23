import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from '../components/ContactForm/ContactForm.js';
import ProductCard from '../components/ProductCard.js';
import { motion } from 'framer-motion';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/products?_limit=10')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home"
    >
      <h1>Welcome to Appliance Store</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        euismod nisl, non ultricies nunc.
      </p>
      <ContactForm />
      <h2>Top Products</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
