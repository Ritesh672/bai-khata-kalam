import React, { Suspense, lazy } from 'react';
import useCanRender3D from '../../hooks/useCanRender3D';
import HeroIllustration from './HeroIllustration';
import styles from './HeroVisual.module.css';

// three.js is only downloaded on devices that will run it smoothly.
const HeroScene = lazy(() => import('./HeroScene'));

const HeroVisual = ({ children }) => {
  const canRender3D = useCanRender3D();

  return (
    <div className={styles.visual}>
      <div className={styles.glow} aria-hidden="true" />
      {canRender3D ? (
        <Suspense fallback={<HeroIllustration />}>
          <HeroScene />
        </Suspense>
      ) : (
        <HeroIllustration />
      )}
      {children}
    </div>
  );
};

export default HeroVisual;
