import React from 'react';
import styles from './StockImage.module.css';

const WIDTHS = [480, 800, 1200, 1600];

/*
 * Responsive image from data/images.js. Stock photos are captioned "Representative image"
 * with the photographer credit, so they are never mistaken for the NGO's own students or school.
 */
const StockImage = ({ image, sizes = '(max-width: 768px) 100vw, 50vw', width = 800, ratio, priority = false, caption = true, className = '' }) => {
  const isStock = image.representative;
  const srcSet = isStock ? WIDTHS.map((w) => `${image.src(w)} ${w}w`).join(', ') : undefined;

  return (
    <figure className={`${styles.figure} ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <img
        src={image.src(width)}
        srcSet={srcSet}
        sizes={isStock ? sizes : undefined}
        alt={image.alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
      {caption && isStock && (
        <figcaption className={styles.caption}>
          Representative image · Photo: <a href={image.page} target="_blank" rel="noopener noreferrer">{image.credit}</a> / Unsplash
        </figcaption>
      )}
    </figure>
  );
};

export default StockImage;
