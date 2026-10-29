import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Download, Home, Mail, Share2 } from 'lucide-react';
import Button from '../../components/ui/Button';
import Receipt from './Receipt';
import { downloadReceipt } from '../../lib/receipt';
import { ease } from '../../lib/motion';
import styles from './DonationSuccess.module.css';

const CONFETTI_COLOURS = ['#2563EB', '#F97316', '#22C55E', '#8B5CF6'];

const shareText = 'I just supported Bai Khata Kalam, helping underprivileged children in Tripura get a quality education. You can too: https://www.baikhatakalam.com/donate';

const Celebration = ({ donation }) => {
  const reduceMotion = useReducedMotion();

  // One celebratory confetti burst (the library is only downloaded on this page).
  useEffect(() => {
    if (reduceMotion) return;
    import('canvas-confetti').then(({ default: confetti }) => {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.35 }, colors: CONFETTI_COLOURS, disableForReducedMotion: true });
    });
  }, [reduceMotion]);

  return (
    <div className="container">
      <div className={styles.card}>
        <svg className={styles.check} viewBox="0 0 80 80" aria-hidden="true">
          <motion.circle cx="40" cy="40" r="36" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, ease }} />
          <motion.path d="M24 41 L35 52 L57 29" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.5, ease }} />
        </svg>
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          Thank You, {donation.name.split(' ')[0]}!
        </motion.h1>
        <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>
          Your donation has been successfully processed.
        </motion.p>

        <Receipt donation={donation} />

        <p className={styles.notice}>
          <Mail size={18} aria-hidden="true" />
          Please keep your Payment ID for your records. Razorpay sends a payment confirmation to your email.
        </p>

        <div className={styles.actions}>
          <Button variant="outline" onClick={() => downloadReceipt(donation)} icon={<Download size={18} aria-hidden="true" />}>
            Download Receipt
          </Button>
          <Button href={`https://wa.me/?text=${encodeURIComponent(shareText)}`} variant="orange" icon={<Share2 size={18} aria-hidden="true" />}>
            Share on WhatsApp
          </Button>
          <Button to="/" icon={<Home size={18} aria-hidden="true" />}>Back to Home</Button>
        </div>
      </div>
    </div>
  );
};

export default Celebration;
