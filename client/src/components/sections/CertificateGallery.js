import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import Lightbox from '../ui/Lightbox';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';
import styles from './CertificateGallery.module.css';

// Certificates shown as a fanned 3D stack that spreads out on hover; click any to view full size.
const CertificateGallery = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const lightboxItems = items.map((item) => ({ src: item.image, alt: `${item.title} certificate`, caption: item.title }));

  return (
    <>
      <motion.ul
        className={styles.fan}
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {items.map((item, index) => (
          <motion.li
            key={item.title}
            className={styles.item}
            style={{ '--i': index, '--n': items.length }}
            variants={fadeUp}
          >
            <button type="button" className={styles.thumb} onClick={() => setOpenIndex(index)}>
              <img src={item.image} alt={`${item.title} certificate issued to Bai Khata Kalam`} loading="lazy" />
              <span className={styles.zoom}><Maximize2 size={16} aria-hidden="true" /> View</span>
            </button>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </motion.li>
        ))}
      </motion.ul>
      <Lightbox items={lightboxItems} index={openIndex} onClose={() => setOpenIndex(null)} onChange={setOpenIndex} />
    </>
  );
};

export default CertificateGallery;
