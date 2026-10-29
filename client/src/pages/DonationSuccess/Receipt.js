import React from 'react';
import { motion } from 'framer-motion';
import { ease } from '../../lib/motion';
import styles from './DonationSuccess.module.css';

// Paper-style receipt card with a perforated edge.
const Receipt = ({ donation }) => {
  const rows = [
    ['Payment ID', donation.paymentId],
    ['Date & Time', donation.date],
    ['Amount', `₹${donation.amount}`],
    ['Donor Name', donation.name],
    ['Email Address', donation.email],
  ];

  return (
    <motion.section
      className={styles.receipt}
      aria-labelledby="receipt-heading"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6, ease }}
    >
      <h2 id="receipt-heading">Transaction Summary</h2>
      <dl>
        {rows.map(([label, value]) => (
          <div key={label} className={label === 'Amount' ? styles.amountRow : undefined}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </motion.section>
  );
};

export default Receipt;
