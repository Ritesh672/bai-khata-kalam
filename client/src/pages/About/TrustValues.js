import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../components/ui/Icon';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';
import styles from './About.module.css';
import SwipeHint from '../../components/ui/SwipeHint';

const values = [
  {
    title: 'Fully Transparent',
    text: 'Our registration documents are published here, and we report openly on how donations are used.',
    icon: 'award',
    tone: 'teal',
  },
  {
    title: 'Community Led',
    text: 'Driven by local teachers and volunteers who understand the unique needs of our children.',
    icon: 'heart',
    tone: 'pink',
  },
  {
    title: 'Results Focused',
    text: 'Student progress is followed closely by teachers who know every child by name.',
    icon: 'target',
    tone: 'amber',
  },
];

// Value cards with a gradient border that lights up on hover and a numbered gradient icon.
const TrustValues = () => (
  <section className={`section ${styles.values}`} aria-label="Our values">
    <div className="container">
    <motion.ul className={`${styles.valuesGrid} mobile-swipe`} variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      {values.map((value, index) => (
        <motion.li key={value.title} variants={fadeUp} className={`${styles.valueCard} ${styles[value.tone]}`}>
          <div className={styles.valueInner}>
            <div className={styles.valueTop}>
              <span className={styles.valueIcon}><Icon name={value.icon} size={26} /></span>
              <span className={styles.valueNumber} aria-hidden="true">0{index + 1}</span>
            </div>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
    <SwipeHint />
    </div>
  </section>
);

export default TrustValues;
