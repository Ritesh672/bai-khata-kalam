import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';
import Button from '../../components/ui/Button';
import styles from './Donate.module.css';

// The donate button. On phones it stays pinned to the bottom of the screen while the form is in view,
// so it is visible the moment the page opens.
const PaySection = ({ amount, isProcessing }) => {
  const value = Number(amount);
  const label = Number.isInteger(value) && value > 0 ? ` ₹${value.toLocaleString('en-IN')}` : '';

  return (
    <div className={styles.payBar}>
      <Button type="submit" size="lg" block disabled={isProcessing} icon={<Lock size={18} aria-hidden="true" />}>
        {isProcessing ? 'Processing…' : `Donate${label} Securely`}
      </Button>
      <p className={styles.payNote}>
        <ShieldCheck size={15} aria-hidden="true" /> UPI, cards &amp; net banking · Secured by Razorpay
      </p>
    </div>
  );
};

export default PaySection;
