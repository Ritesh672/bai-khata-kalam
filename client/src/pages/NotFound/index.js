import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import PageMeta from '../../components/layout/PageMeta';
import Button from '../../components/ui/Button';
import styles from './NotFound.module.css';

const NotFound = () => (
  <section className={styles.page}>
    <PageMeta title="Page Not Found | Bai Khata Kalam" noindex />
    <div className={`container ${styles.inner}`}>
      <motion.div
        className={styles.book}
        animate={{ rotate: [-6, 6, -6], y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <BookOpen size={72} />
      </motion.div>
      <p className={styles.code}>404</p>
      <h1>Page not found</h1>
      <p className={styles.text}>
        Like a pencil at the end of a school day, this page has gone missing. Let&rsquo;s get you back on track.
      </p>
      <div className={styles.actions}>
        <Button to="/">Go to Home</Button>
        <Button to="/donate" variant="outline">Donate Now</Button>
      </div>
    </div>
  </section>
);

export default NotFound;
