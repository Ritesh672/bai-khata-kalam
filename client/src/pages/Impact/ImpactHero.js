import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import StatCounter from '../../components/ui/StatCounter';
import { stats } from '../../data/stats';
import { ease, fadeUp, stagger } from '../../lib/motion';
import styles from './Impact.module.css';

const milestones = ['Registered society', 'NGO Darpan & 12A', 'Montessori classrooms', 'First Sports Day'];

// Hero with a live-looking "dashboard" panel built only from verified figures and milestones.
const ImpactHero = () => (
  <section className={styles.hero}>
    <div className={`container ${styles.heroGrid}`}>
      <motion.div variants={stagger(0.12)} initial="hidden" animate="visible" className={styles.heroCopy}>
        <motion.div variants={fadeUp}><Badge tone="blue">Our Results</Badge></motion.div>
        <motion.h1 variants={fadeUp}>Measurable Impact, Real Lives</motion.h1>
        <motion.p variants={fadeUp}>
          We are a young organisation, and we report only what we can stand behind: real numbers, real
          milestones, and the children behind them.
        </motion.p>
      </motion.div>

      <motion.aside
        className={styles.dashboard}
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
        aria-label="Impact summary"
      >
        <div className={styles.dashHeader}>
          <span className={styles.dashDots} aria-hidden="true"><i /><i /><i /></span>
          <span>Impact summary · 2026</span>
        </div>
        <dl className={styles.kpis}>
          {stats.map((stat) => (
            <div key={stat.label} className={`${styles.kpi} ${styles[`kpi_${stat.tone}`]}`}>
              <dt>{stat.label}</dt>
              <dd><StatCounter value={stat.value} suffix={stat.suffix} noCount={stat.noCount} /></dd>
            </div>
          ))}
        </dl>
        <p className={styles.dashLabel}>Milestones reached</p>
        <ol className={styles.progress}>
          {milestones.map((milestone, index) => (
            <motion.li
              key={milestone}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.15 }}
            >
              <span className={styles.check}><Check size={14} aria-hidden="true" /></span>
              {milestone}
            </motion.li>
          ))}
        </ol>
      </motion.aside>
    </div>
  </section>
);

export default ImpactHero;
