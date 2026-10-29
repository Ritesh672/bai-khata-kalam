import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck } from 'lucide-react';
import registration from '../../assets/images/registration.jpeg';
import nashaMukt from '../../assets/images/nashamukt.jpeg';
import integrityPledge from '../../assets/images/pledge.jpeg';
import styles from './Donate.module.css';

const thumbs = [
  { src: registration, alt: 'NGO registration certificate' },
  { src: nashaMukt, alt: 'Nasha Mukt Bharat Abhiyaan certificate' },
  { src: integrityPledge, alt: 'Integrity pledge certificate' },
];

const TrustPanel = () => (
  <section className={styles.trust} aria-labelledby="trust-heading">
    <div className={styles.trustHead}>
      <Heart fill="currentColor" aria-hidden="true" />
      <h2 id="trust-heading">Trust &amp; Transparency</h2>
    </div>
    <p>
      Bai Khata Kalam is a government-registered society (No. 9481 of 2024) listed on NGO Darpan. Your donation
      supports educational programmes and student welfare at Vidyasagar Vidyapith.
    </p>
    <div className={styles.thumbs}>
      {thumbs.map((thumb) => (
        <img key={thumb.alt} src={thumb.src} alt={thumb.alt} loading="lazy" />
      ))}
    </div>
    <p className={styles.trustNote}>
      <ShieldCheck size={16} aria-hidden="true" />
      <span>
        Payments are processed securely by Razorpay. Donations are not currently eligible for 80G tax deduction.{' '}
        <Link to="/about">See our certificates</Link>
      </span>
    </p>
  </section>
);

export default TrustPanel;
