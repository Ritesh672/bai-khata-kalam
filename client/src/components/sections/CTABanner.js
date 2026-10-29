import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, NotebookPen, PenLine } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';
import styles from './CTABanner.module.css';

const floaters = [
  { Icon: BookOpen, className: styles.f1 },
  { Icon: NotebookPen, className: styles.f2 },
  { Icon: PenLine, className: styles.f3 },
];

// Closing call-to-action band used at the end of pages: navy panel with a drifting gradient.
const CTABanner = ({ title, text, children, icon, headingId }) => (
  <section className={styles.section} aria-labelledby={headingId}>
    <div className="container">
      <motion.div
        className={styles.panel}
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {floaters.map(({ Icon, className }) => (
          <Icon key={className} className={`${styles.floater} ${className}`} aria-hidden="true" />
        ))}
        {icon && <motion.div variants={fadeUp} className={styles.icon}>{icon}</motion.div>}
        <motion.h2 id={headingId} variants={fadeUp} className={styles.title}>{title}</motion.h2>
        {text && <motion.p variants={fadeUp} className={styles.text}>{text}</motion.p>}
        <motion.div variants={fadeUp} className={styles.actions}>{children}</motion.div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
