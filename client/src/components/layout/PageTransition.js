import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../../lib/motion';

// Wraps each page so routes fade/slide in and out.
const PageTransition = ({ children }) => (
  <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
    {children}
  </motion.div>
);

export default PageTransition;
