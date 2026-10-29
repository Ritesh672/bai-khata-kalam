import React from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import styles from './TiltCard.module.css';

// Card that tilts in 3D toward the pointer (CSS perspective, no WebGL). Flat for touch and reduced motion.
const TiltCard = ({ className = '', children, max = 8, ...rest }) => {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), { stiffness: 200, damping: 20 });

  const onMove = (event) => {
    if (reduceMotion || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  };
  const onLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className={styles.stage}>
      <motion.div
        className={`${styles.card} ${className}`}
        style={reduceMotion ? undefined : { rotateX, rotateY }}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        {...rest}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TiltCard;
