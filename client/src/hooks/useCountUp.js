import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

// Animates a number from 0 to `target` once `start` becomes true (ease-out cubic).
export default function useCountUp(target, { start = true, duration = 1600 } = {}) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    if (reduceMotion) {
      setValue(target);
      return undefined;
    }
    let frame;
    const startedAt = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration, reduceMotion]);

  return value;
}
