import React from 'react';
import { ArrowLeft, TriangleAlert } from 'lucide-react';
import Button from '../../components/ui/Button';
import styles from './DonationSuccess.module.css';

const InvalidAccess = () => (
  <div className="container">
    <div className={`${styles.card} ${styles.invalid}`}>
      <TriangleAlert size={48} className={styles.warn} aria-hidden="true" />
      <h1>Invalid Access</h1>
      <p>We couldn&rsquo;t find any donation details. If you just made a payment, please check your email for confirmation.</p>
      <Button to="/donate" icon={<ArrowLeft size={18} aria-hidden="true" />}>Back to Donate</Button>
    </div>
  </div>
);

export default InvalidAccess;
