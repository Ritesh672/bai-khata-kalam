import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../components/ui/Icon';
import SectionHeader from '../../components/ui/SectionHeader';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';
import styles from './SuccessModels.module.css';
import SwipeHint from '../../components/ui/SwipeHint';

const models = [
  {
    category: 'Curriculum',
    title: 'Montessori Excellence',
    text: 'Young learners build literacy and numeracy through hands-on, child-centred activities, learning by doing rather than by rote.',
    icon: 'sprout',
    tone: 'ocean',
  },
  {
    category: 'Social',
    title: 'Community Empowerment',
    text: 'We work with parents on regular attendance and girls’ education, and have taken the national Child-Marriage-Free India pledge.',
    icon: 'users',
    tone: 'sunset',
  },
  {
    category: 'Milestone',
    title: 'First Annual Sports Day',
    text: 'In February 2026 our students competed in six events, cheered on by parents and community leaders, and made the local news.',
    icon: 'award',
    tone: 'forest',
  },
];

// Ticket-style cards: gradient stub on top, dashed tear line, details below.
const SuccessModels = () => (
  <section className={`section ${styles.section}`}>
    <div className="container">
      <SectionHeader title="Success Models" align="left" />
      <motion.ul className={`${styles.grid} mobile-swipe`} variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        {models.map((model, index) => (
          <motion.li key={model.title} variants={fadeUp} whileHover={{ y: -10, rotate: index === 1 ? 0 : index === 0 ? -1 : 1 }} className={`${styles.ticket} ${styles[model.tone]}`}>
            <div className={styles.stub}>
              <span className={styles.icon}><Icon name={model.icon} size={30} /></span>
              <span className={styles.category}>{model.category}</span>
              <span className={styles.index} aria-hidden="true">#{index + 1}</span>
            </div>
            <div className={styles.details}>
              <h3>{model.title}</h3>
              <p>{model.text}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
      <SwipeHint />
    </div>
  </section>
);

export default SuccessModels;
