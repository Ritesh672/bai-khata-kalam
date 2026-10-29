import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';
import styles from './SectionHeader.module.css';

// Badge + heading + subtitle block used at the top of most sections.
const SectionHeader = ({ badge, badgeTone = 'orange', title, subtitle, align = 'center', dark = false, as: Heading = 'h2', id }) => (
  <motion.div
    className={`${styles.header} ${styles[align]} ${dark ? styles.dark : ''}`}
    variants={stagger(0.08)}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
  >
    {badge && (
      <motion.div variants={fadeUp}>
        <Badge tone={dark ? 'light' : badgeTone}>{badge}</Badge>
      </motion.div>
    )}
    <motion.div variants={fadeUp}>
      <Heading id={id} className={styles.title}>{title}</Heading>
    </motion.div>
    {subtitle && (
      <motion.p variants={fadeUp} className={styles.subtitle}>{subtitle}</motion.p>
    )}
  </motion.div>
);

export default SectionHeader;
