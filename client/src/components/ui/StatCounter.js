import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import useCountUp from '../../hooks/useCountUp';

// A number that counts up from 0 the first time it scrolls into view.
const StatCounter = ({ value, prefix = '', suffix = '', noCount = false, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const current = useCountUp(value, { start: inView && !noCount });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {noCount ? value : current.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
};

export default StatCounter;
