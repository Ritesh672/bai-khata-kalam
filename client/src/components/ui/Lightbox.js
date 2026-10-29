import React, { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './Lightbox.module.css';

// Full-screen image viewer. items: [{ src, alt, caption }]; Esc closes, arrow keys navigate.
const Lightbox = ({ items, index, onClose, onChange }) => {
  const closeRef = useRef(null);
  const isOpen = index !== null && index !== undefined;

  const go = useCallback(
    (step) => onChange((index + step + items.length) % items.length),
    [index, items.length, onChange],
  );

  useEffect(() => {
    if (!isOpen) return undefined;
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') go(1);
      if (event.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previouslyFocused?.focus?.();
    };
  }, [isOpen, go, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Close">
            <X size={26} aria-hidden="true" />
          </button>
          {items.length > 1 && (
            <>
              <button type="button" className={`${styles.nav} ${styles.prev}`} onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous image">
                <ChevronLeft size={30} aria-hidden="true" />
              </button>
              <button type="button" className={`${styles.nav} ${styles.next}`} onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next image">
                <ChevronRight size={30} aria-hidden="true" />
              </button>
            </>
          )}
          <motion.figure
            key={index}
            className={styles.figure}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={items[index].src} alt={items[index].alt} />
            {items[index].caption && <figcaption>{items[index].caption}</figcaption>}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Lightbox;
