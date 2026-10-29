import React from 'react';
import { useLocation } from 'react-router-dom';
import PageMeta from '../../components/layout/PageMeta';
import InvalidAccess from './InvalidAccess';
import Celebration from './Celebration';
import styles from './DonationSuccess.module.css';

const DonationSuccess = () => {
  const { state } = useLocation();

  return (
    <div className={styles.page}>
      <PageMeta title="Thank You for Your Donation | Bai Khata Kalam" path="/donation-success" noindex />
      {state ? <Celebration donation={state} /> : <InvalidAccess />}
    </div>
  );
};

export default DonationSuccess;
