import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../components/ui/Icon';
import StatCounter from '../../components/ui/StatCounter';
import { stats } from '../../data/stats';
import { ease, fadeUp, stagger, viewportOnce } from '../../lib/motion';
import styles from './Numbers.module.css';

// How each figure is counted, shown under the number.
const notes = {
  'Children Reached': 'Children supported through our school, programmes and events.',
  'Dedicated Teachers': 'Teachers on the school team in 2026.',
  'Volunteers': 'People who have given their time to teach, mentor and help at events.',
  'Registered Since': 'Registered as a society with the Government of Tripura.',
};

// Soft pastel ring colours
const gradients = {
  orange: ['#FDBA8C', '#F9A8D4'],
  green: ['#86EFAC', '#5EEAD4'],
  blue: ['#93C5FD', '#A5B4FC'],
  purple: ['#C4B5FD', '#F9A8D4'],
};

// Ring-gauge cards: a gradient ring draws itself around each number.
const NumbersSection = () => (
  <section className={`section ${styles.section}`} aria-labelledby="numbers-heading">
    <div className="container">
      <h2 id="numbers-heading" className="visually-hidden">Our numbers</h2>
      <motion.ul className={styles.grid} variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        {stats.map((stat) => {
          const [from, to] = gradients[stat.tone];
          const gradientId = `ring-${stat.tone}`;
          return (
            <motion.li key={stat.label} variants={fadeUp} whileHover={{ y: -8 }} className={`${styles.card} ${styles[stat.tone]}`}>
              <div className={styles.gauge}>
                <svg viewBox="0 0 120 120" aria-hidden="true">
                  <defs>
                    <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={from} />
                      <stop offset="100%" stopColor={to} />
                    </linearGradient>
                  </defs>
                  <circle className={styles.track} cx="60" cy="60" r="52" />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="52"
                    stroke={`url(#${gradientId})`}
                    className={styles.progress}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 1.6, ease }}
                  />
                </svg>
                <div className={styles.center}>
                  <span className={styles.icon}><Icon name={stat.icon} size={18} /></span>
                  <StatCounter value={stat.value} suffix={stat.suffix} noCount={stat.noCount} className={styles.value} />
                </div>
              </div>
              <h3 className={styles.label}>{stat.label}</h3>
              <p className={styles.note}>{notes[stat.label]}</p>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  </section>
);

export default NumbersSection;
