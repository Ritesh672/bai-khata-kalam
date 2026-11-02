import React, { useState } from 'react';
import { Check, Copy, Heart, Landmark, Smartphone } from 'lucide-react';
import Button from '../../components/ui/Button';
import Reveal from '../../components/ui/Reveal';
import { whatsappLink } from '../../data/org';
import { bank, schoolImages } from '../../data/school';
import Poster from './Poster';
import styles from './SupportSchool.module.css';

const details = [
  { label: 'Account name', value: bank.accountName },
  { label: 'Account number', value: bank.accountNumber, copy: true },
  { label: 'IFSC code', value: bank.ifsc, copy: true },
  { label: 'Bank', value: bank.bankName },
];

const CopyButton = ({ value, label }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  return (
    <button type="button" className={styles.copy} onClick={copy} aria-label={`Copy ${label}`}>
      {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
};

// Closing section: give online (Razorpay) or by direct bank transfer to Bai Khata Kalam.
const SupportSchool = () => (
  <section className={`section ${styles.section}`} aria-labelledby="school-cta">
    <div className="container">
      <Reveal className={styles.head}>
        <span className={styles.heart}><Heart size={30} fill="currentColor" aria-hidden="true" /></span>
        <h2 id="school-cta">Be a Part of Their Journey</h2>
        <p>Your support can help us expand our reach and provide quality education to more students at Vidyasagar Vidyapith.</p>
      </Reveal>

      <div className={styles.grid}>
        <Reveal className={`${styles.card} ${styles.online}`}>
          <span className={styles.cardIcon}><Smartphone size={22} aria-hidden="true" /></span>
          <h3>Donate online</h3>
          <p>UPI, cards and net banking, processed securely by Razorpay. You get a receipt straight away.</p>
          <div className={styles.actions}>
            <Button to="/donate" size="lg">Donate Now</Button>
            <Button to="/contact" variant="outline" size="lg">Become a Volunteer</Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className={`${styles.card} ${styles.bank}`}>
          <div className={styles.bankBody}>
            <span className={styles.cardIcon}><Landmark size={22} aria-hidden="true" /></span>
            <h3>Bank transfer</h3>
            <p>Send directly to Bai Khata Kalam&rsquo;s bank account.</p>
            <dl className={styles.details}>
              {details.map(({ label, value, copy }) => (
                <div key={label} className={styles.detail}>
                  <dt>{label}</dt>
                  <dd>
                    <span className={copy ? styles.mono : ''}>{value}</span>
                    {copy && <CopyButton value={value} label={label} />}
                  </dd>
                </div>
              ))}
            </dl>
            <p className={styles.note}>
              After transferring, please{' '}
              <a href={whatsappLink('Hello, I have made a bank transfer to Bai Khata Kalam.')} target="_blank" rel="noopener noreferrer">
                message us on WhatsApp
              </a>{' '}
              so we can thank you and send a receipt.
            </p>
          </div>
          <div className={styles.bankPoster}>
            <Poster image={schoolImages.bankPoster} caption="Bai Khata Kalam bank details" />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default SupportSchool;
