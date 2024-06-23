import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard.js';
import { motion } from 'framer-motion';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/products')
      .then(res => {
        setProducts(res.data);
        const uniqueCategories = [...new Set(res.data.map(product => product.category))];
        setCategories(uniqueCategories);
      })
      .catch(err => console.log(err));
  }, []);

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
           (selectedCategory === '' || product.category === selectedCategory);
  });

  const handleSearchTermChange = e => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9а-яА-Я\s]*$/;
    if (regex.test(value)) {
      setSearchTerm(value);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="catalog"
    >
      <h1>Catalog</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
        <option value="">All categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </motion.div>
  );
};

export default Catalog;
