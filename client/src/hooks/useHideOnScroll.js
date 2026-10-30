import { useEffect, useState } from 'react';

// True while the visitor is scrolling down past `offset` pixels; false again as soon as they scroll up.
export default function useHideOnScroll(offset = 120) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 6) return;
      setHidden(y > offset && y > lastY);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return hidden;
}
