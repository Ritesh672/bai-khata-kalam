import React, { useState } from 'react';
import { RotateCw } from 'lucide-react';
import styles from './FlipCard.module.css';

// 3D card: flips on hover (desktop) or with its toggle button (touch and keyboard).
// Both faces stay in the accessibility tree, so screen readers get the name and the bio.
const FlipCard = ({ front, back, toggleLabel = 'Read bio' }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`${styles.card} ${flipped ? styles.flipped : ''}`}>
      <div className={styles.inner}>
        <div className={styles.front}>{front}</div>
        <div className={styles.back}>{back}</div>
      </div>
      <button
        type="button"
        className={styles.toggle}
        aria-pressed={flipped}
        onClick={() => setFlipped((value) => !value)}
      >
        <RotateCw size={16} aria-hidden="true" />
        {flipped ? 'Back' : toggleLabel}
      </button>
    </div>
  );
};

export default FlipCard;
