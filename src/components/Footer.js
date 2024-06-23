import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="footer"
    >
      <p>&copy; 2022 Appliance Store</p>
    </motion.footer>
  );
};

export default Footer;
