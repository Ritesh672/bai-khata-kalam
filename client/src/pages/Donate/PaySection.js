import React from 'react';
import { CreditCard, Lock } from 'lucide-react';
import Step from './Step';
import Button from '../../components/ui/Button';
import styles from './Donate.module.css';

const PaySection = ({ amount, isProcessing }) => {
  const value = Number(amount);
  const label = Number.isInteger(value) && value > 0 ? ` ₹${value.toLocaleString('en-IN')}` : '';

  return (
    <Step number={3} title="Pay securely">
      <Button type="submit" size="lg" block disabled={isProcessing} icon={<Lock size={18} aria-hidden="true" />}>
        {isProcessing ? 'Processing…' : `Proceed to Secure Payment${label}`}
      </Button>
      <p className={styles.payNote}>
        <CreditCard size={15} aria-hidden="true" /> UPI, cards and net banking · Payments processed by Razorpay
      </p>
    </Step>
  );
};

export default PaySection;
