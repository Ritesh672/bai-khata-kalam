import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/ui/SectionHeader';
import Icon from '../../components/ui/Icon';
import { philosophy } from '../../data/programs';
import styles from './Philosophy.module.css';

const tones = ['ocean', 'forest', 'sunset'];

// Horizontal accordion: the active panel widens and fills with its gradient.
const Philosophy = () => {
  const [active, setActive] = useState(0);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader
          title="Our Teaching Philosophy"
          subtitle="How our educators empower the next generation of leaders in Tripura."
        />
        <ul className={styles.panels}>
          {philosophy.map((item, index) => {
            const isActive = active === index;
            return (
              <motion.li
                key={item.title}
                layout
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`${styles.panel} ${styles[tones[index]]} ${isActive ? styles.active : ''}`}
                onMouseEnter={() => setActive(index)}
              >
                <div className={styles.top}>
                  <span className={styles.icon}><Icon name={item.icon} size={28} /></span>
                  <span className={styles.number} aria-hidden="true">0{index + 1}</span>
                </div>
                <h3 className={styles.heading}>
                  <button
                    type="button"
                    className={styles.button}
                    aria-expanded={isActive}
                    onClick={() => setActive(index)}
                    onFocus={() => setActive(index)}
                  >
                    {item.title}
                  </button>
                </h3>
                <p className={styles.text} hidden={!isActive}>{item.text}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Philosophy;
