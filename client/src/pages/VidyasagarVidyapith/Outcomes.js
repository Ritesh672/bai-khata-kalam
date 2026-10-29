import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenCheck, HeartHandshake, Sparkles } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import { schoolOutcomes } from '../../data/programs';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';
import styles from './Outcomes.module.css';

const icons = [Sparkles, BookOpenCheck, HeartHandshake];

// Result cards: a big gradient icon medallion breaks out of the top of each card.
const Outcomes = () => (
  <section className={`section ${styles.section}`}>
    <div className="container">
      <SectionHeader badge="Real Results" title="Measuring Our Success" />
      <motion.ul className={styles.grid} variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        {schoolOutcomes.map((item, index) => {
          const OutcomeIcon = icons[index];
          return (
            <motion.li key={item.title} variants={fadeUp} whileHover={{ y: -10 }} className={`${styles.card} ${styles[item.tone]}`}>
              <span className={styles.medal}><OutcomeIcon size={34} aria-hidden="true" /></span>
              <span className={styles.kicker}>Outcome 0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className={styles.bar} aria-hidden="true" />
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  </section>
);

export default Outcomes;
