import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../../components/ui/Badge';
import { fadeUp, stagger } from '../../lib/motion';
import styles from './Donate.module.css';

const DonateHeader = () => (
  <motion.header className={`container ${styles.header}`} variants={stagger(0.1)} initial="hidden" animate="visible">
    <motion.div variants={fadeUp}><Badge tone="orange">Make an Impact</Badge></motion.div>
    <motion.h1 variants={fadeUp}>Invest in a Child&rsquo;s Future</motion.h1>
    <motion.p variants={fadeUp}>Your contribution directly supports underprivileged children in Tripura.</motion.p>
  </motion.header>
);

export default DonateHeader;
