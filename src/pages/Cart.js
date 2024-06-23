import React from 'react';
import ProductCard from '../components/ProductCard.js';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext.js';

const Cart = () => {
  const { cart, removeFromCart } = useAppContext();

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="cart"
    >
      <h1>Cart</h1>
      <div className="product-list">
        {cart.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            showRemoveButton
            onRemove={() => removeFromCart(product.id)}
          />
        ))}
      </div>
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </motion.div>
  );
};

export default Cart;
