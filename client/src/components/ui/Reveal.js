import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/motion';

// Adds a delay to a preset's "visible" transition (a variant's own transition wins over the prop).
const withDelay = (variants, delay) =>
  delay
    ? { ...variants, visible: { ...variants.visible, transition: { ...(variants.visible.transition || {}), delay } } }
    : variants;

// Animates its children into view once, using a shared preset (default: fade up).
const Reveal = ({ as = 'div', variants = fadeUp, delay = 0, className, children, ...rest }) => {
  const Component = motion[as];
  return (
    <Component
      className={className}
      variants={withDelay(variants, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Reveal;
