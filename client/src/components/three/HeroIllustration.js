import React from 'react';
import styles from './HeroVisual.module.css';

// Static illustration of the same book, notebook and pen. Shown on phones, with reduced motion,
// without WebGL, and while the 3D scene is loading.
const HeroIllustration = () => (
  <svg className={styles.illustration} viewBox="0 0 400 400" role="img" aria-label="Illustration of a book, a notebook and a pen">
    <g className={styles.floatA}>
      <g transform="rotate(-12 150 140)">
        <rect x="70" y="95" width="170" height="110" rx="10" fill="#2563EB" />
        <rect x="80" y="104" width="155" height="92" rx="6" fill="#FDFCF0" />
        <rect x="70" y="95" width="16" height="110" rx="6" fill="#1D4ED8" />
        <rect x="115" y="135" width="90" height="9" rx="4" fill="#F97316" />
        <rect x="115" y="153" width="65" height="7" rx="3.5" fill="#CBD5E1" />
      </g>
    </g>
    <g className={styles.floatB}>
      <g transform="rotate(10 270 240)">
        <rect x="205" y="185" width="140" height="105" rx="10" fill="#F97316" />
        <rect x="214" y="193" width="124" height="89" rx="6" fill="#FDFCF0" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={i} cx="210" cy={200 + i * 15} r="5" fill="none" stroke="#94A3B8" strokeWidth="3" />
        ))}
        <rect x="232" y="215" width="88" height="5" rx="2.5" fill="#E2E8F0" />
        <rect x="232" y="232" width="88" height="5" rx="2.5" fill="#E2E8F0" />
        <rect x="232" y="249" width="60" height="5" rx="2.5" fill="#E2E8F0" />
      </g>
    </g>
    <g className={styles.floatC}>
      <g transform="rotate(-38 160 290)">
        <rect x="80" y="282" width="150" height="16" rx="8" fill="#22C55E" />
        <rect x="80" y="280" width="40" height="20" rx="8" fill="#0F172A" />
        <polygon points="230,282 256,290 230,298" fill="#F8FAFC" stroke="#CBD5E1" />
      </g>
    </g>
    <circle cx="330" cy="110" r="9" fill="#F97316" className={styles.floatB} />
    <circle cx="60" cy="250" r="7" fill="#22C55E" className={styles.floatA} />
    <circle cx="200" cy="60" r="6" fill="#2563EB" className={styles.floatC} />
  </svg>
);

export default HeroIllustration;
