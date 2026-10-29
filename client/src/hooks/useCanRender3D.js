import { useEffect, useState } from 'react';

const hasWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
};

// The 3D hero only runs where it will be smooth: wide screens with WebGL,
// no "reduce motion" preference and no data-saver mode. Everyone else gets the static illustration.
export default function useCanRender3D() {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 900px)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const saveData = Boolean(navigator.connection && navigator.connection.saveData);
    const webgl = hasWebGL();

    const update = () => setCanRender(wide.matches && !reduce.matches && !saveData && webgl);
    update();
    wide.addEventListener('change', update);
    reduce.addEventListener('change', update);
    return () => {
      wide.removeEventListener('change', update);
      reduce.removeEventListener('change', update);
    };
  }, []);

  return canRender;
}
