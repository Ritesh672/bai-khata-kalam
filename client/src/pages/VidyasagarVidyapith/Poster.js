import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import Lightbox from '../../components/ui/Lightbox';
import styles from './Poster.module.css';

// One of the school's own posters, framed; tapping it opens the full-size image.
const Poster = ({ image, caption, className = '' }) => {
  const [open, setOpen] = useState(null);

  return (
    <>
      <button type="button" className={`${styles.poster} ${className}`} onClick={() => setOpen(0)} aria-label={`View full size: ${caption}`}>
        <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
        <span className={styles.zoom} aria-hidden="true"><Maximize2 size={14} /> View full size</span>
      </button>
      <Lightbox items={[{ src: image.src, alt: image.alt, caption }]} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </>
  );
};

export default Poster;
