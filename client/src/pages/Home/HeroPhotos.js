import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { images } from '../../data/images';
import { ease } from '../../lib/motion';
import styles from './HeroPhotos.module.css';

// Three overlapping photos of children learning (representative images), so visitors see
// who the work is for the moment the page opens.
const photos = [
  { image: images.girlWithBook, className: styles.main, sizes: '(max-width: 600px) 60vw, 340px', priority: true },
  { image: images.happyStudents, className: styles.second, sizes: '(max-width: 600px) 46vw, 260px' },
  { image: images.girlInUniform, className: styles.third, sizes: '(max-width: 600px) 38vw, 220px' },
];

const srcSet = (image) => [400, 800, 1200].map((w) => `${image.src(w)} ${w}w`).join(', ');

const HeroPhotos = () => (
  <div className={styles.wrap}>
    <div className={styles.stage}>
      <span className={`${styles.shape} ${styles.shapeA}`} aria-hidden="true" />
      <span className={`${styles.shape} ${styles.shapeB}`} aria-hidden="true" />

      {photos.map(({ image, className, sizes, priority }, index) => (
        <motion.figure
          key={image.page}
          className={`${styles.photo} ${className}`}
          initial={{ opacity: 0, y: 24, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 + index * 0.15, ease }}
        >
          <img
            src={image.src(800)}
            srcSet={srcSet(image)}
            sizes={sizes}
            alt={image.alt}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : undefined}
            decoding="async"
          />
        </motion.figure>
      ))}

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6, ease }}
      >
        <span className={styles.heart}><Heart size={18} fill="currentColor" aria-hidden="true" /></span>
        <span>
          <strong>1,000+ Children</strong>
          <span className={styles.cardText}>Reached with 200+ volunteers</span>
        </span>
      </motion.div>
    </div>

    <p className={styles.credit}>
      Representative images · Photos:{' '}
      {photos.map(({ image }, index) => (
        <React.Fragment key={image.page}>
          <a href={image.page} target="_blank" rel="noopener noreferrer">{image.credit}</a>
          {index < photos.length - 1 ? ', ' : ''}
        </React.Fragment>
      ))}{' '}
      / Unsplash
    </p>
  </div>
);

export default HeroPhotos;
