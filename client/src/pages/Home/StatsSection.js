import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../components/ui/Icon';
import StatCounter from '../../components/ui/StatCounter';
import { stats, STATS_AS_OF } from '../../data/stats';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';
import styles from './Stats.module.css';

// Glowing stat tiles: rotating gradient border, coloured glow, gradient number, watermark icon.
const StatsSection = () => (
  <section className={styles.stats} aria-labelledby="stats-heading">
    <div className={styles.orbA} aria-hidden="true" />
    <div className={styles.orbB} aria-hidden="true" />
    <div className="container">
      <h2 id="stats-heading" className="visually-hidden">Our numbers</h2>
      <motion.ul className={styles.grid} variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        {stats.map((stat) => (
          <motion.li key={stat.label} variants={fadeUp} whileHover={{ y: -10 }} className={`${styles.card} ${styles[stat.tone]}`}>
            <div className={styles.inner}>
              <span className={styles.icon}><Icon name={stat.icon} size={26} /></span>
              <StatCounter value={stat.value} suffix={stat.suffix} noCount={stat.noCount} className={styles.value} />
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.watermark} aria-hidden="true"><Icon name={stat.icon} size={140} /></span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
      <p className={styles.note}>Figures as of {STATS_AS_OF}.</p>
    </div>
  </section>
);

export default StatsSection;
