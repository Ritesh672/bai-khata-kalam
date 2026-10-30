import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeader from '../../components/ui/SectionHeader';
import Icon from '../../components/ui/Icon';
import { philosophy } from '../../data/programs';
import { images } from '../../data/images';
import { ease } from '../../lib/motion';
import styles from './Philosophy.module.css';

const tones = ['ocean', 'forest', 'sunset'];
const srcSet = (image) => [400, 800, 1200].map((w) => `${image.src(w)} ${w}w`).join(', ');

// Photo switcher: pick a principle on one side and the photo of teaching on the other side changes with it.
const Philosophy = () => {
  const [active, setActive] = useState(0);
  const current = philosophy[active];
  const photo = images[current.image];

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader
          badge="How we teach"
          badgeTone="green"
          title="Our Teaching Philosophy"
          subtitle="How our educators empower the next generation of leaders in Tripura."
        />

        <div className={styles.layout}>
          <div className={`${styles.visual} ${styles[tones[active]]}`}>
            <span className={styles.blob} aria-hidden="true" />
            <div className={styles.frame}>
              <AnimatePresence initial={false}>
                <motion.img
                  key={photo.page}
                  className={styles.photo}
                  src={photo.src(800)}
                  srcSet={srcSet(photo)}
                  sizes="(max-width: 900px) 92vw, 560px"
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease }}
                />
              </AnimatePresence>
              <span className={styles.chip}>
                <Icon name={current.icon} size={16} aria-hidden="true" />
                {current.title}
              </span>
            </div>
            <p className={styles.credit}>
              Representative image · Photo:{' '}
              <a href={photo.page} target="_blank" rel="noopener noreferrer">{photo.credit}</a> / Unsplash
            </p>
          </div>

          <ol className={styles.list}>
            {philosophy.map((item, index) => {
              const isActive = active === index;
              return (
                <li key={item.title} className={`${styles.item} ${styles[tones[index]]} ${isActive ? styles.active : ''}`}>
                  <h3 className={styles.heading}>
                    <button
                      type="button"
                      className={styles.button}
                      aria-expanded={isActive}
                      aria-controls={`philosophy-${index}`}
                      onClick={() => setActive(index)}
                      onMouseEnter={() => setActive(index)}
                    >
                      <span className={styles.number} aria-hidden="true">0{index + 1}</span>
                      <span className={styles.icon}><Icon name={item.icon} size={22} /></span>
                      <span>{item.title}</span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`philosophy-${index}`}
                        className={styles.body}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                      >
                        <p className={styles.text}>{item.text}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
