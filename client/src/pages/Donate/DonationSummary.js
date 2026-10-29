import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { tierFor } from '../../data/donation';
import styles from './Donate.module.css';

// Live summary: updates as the donor changes the amount and fills in their details.
const DonationSummary = ({ form }) => {
  const value = Number(form.amount);
  const valid = Number.isInteger(value) && value > 0;
  const tier = tierFor(form.amount);
  const steps = [
    { label: 'Amount chosen', done: valid },
    { label: 'Details added', done: Boolean(form.name && form.email && form.phone) },
  ];

  return (
    <div className={styles.summary} aria-live="polite">
      <p className={styles.summaryLabel}>You&rsquo;re giving</p>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.p
          key={form.amount}
          className={styles.summaryAmount}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          {valid ? `₹${value.toLocaleString('en-IN')}` : '₹ —'}
        </motion.p>
      </AnimatePresence>
      <p className={styles.summaryImpact}>{tier ? tier.text : 'Every rupee helps a child learn.'}</p>
      <ul className={styles.summarySteps}>
        {steps.map((step) => (
          <li key={step.label} className={step.done ? styles.done : ''}>
            <span className={styles.tick}><Check size={13} aria-hidden="true" /></span>
            {step.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationSummary;
