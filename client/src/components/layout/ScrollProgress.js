import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const barStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: 3,
  zIndex: 1100,
  transformOrigin: '0%',
  background: 'linear-gradient(90deg, var(--orange-500), var(--blue-600))',
};

// Thin reading-progress bar at the very top of the page.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div style={{ ...barStyle, scaleX }} aria-hidden="true" />;
};

export default ScrollProgress;
