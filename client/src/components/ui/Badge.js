import React from 'react';
import styles from './Badge.module.css';

// Small pill label above headings. tone: blue | orange | green | light
const Badge = ({ tone = 'blue', children, className = '' }) => (
  <span className={`${styles.badge} ${styles[tone]} ${className}`}>{children}</span>
);

export default Badge;
