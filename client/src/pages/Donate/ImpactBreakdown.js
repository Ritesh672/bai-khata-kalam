import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../components/ui/Icon';
import { impactTiers, tierFor } from '../../data/donation';
import styles from './Donate.module.css';

// The tier matching the chosen amount is highlighted; the highlight glides between tiers.
const ImpactBreakdown = ({ amount }) => {
  const activeTier = tierFor(amount);

  return (
    <section className={styles.breakdown} aria-labelledby="breakdown-heading">
      <h2 id="breakdown-heading">Your Impact Breakdown</h2>
      <ul>
        {impactTiers.map((tier) => {
          const active = activeTier?.min === tier.min;
          return (
            <li key={tier.min} className={`${styles.tier} ${active ? styles.tierActive : ''}`}>
              {active && <motion.span layoutId="tier-highlight" className={styles.tierHighlight} />}
              <span className={styles.tierIcon}><Icon name={tier.icon} size={22} /></span>
              <div className={styles.tierText}>
                <h3>{tier.amount}</h3>
                <p>{tier.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ImpactBreakdown;
