import React from 'react';
import { initials } from '../../data/team';
import styles from './Avatar.module.css';

// Round portrait when a real, consented photo is given; otherwise an initials monogram.
const Avatar = ({ name, photo, tone = 'blue', size = 'md', className = '' }) => (
  <span className={`${styles.avatar} ${styles[tone]} ${styles[size]} ${className}`} aria-hidden="true">
    {photo ? <img className={styles.photo} src={photo} alt="" loading="lazy" decoding="async" /> : initials(name)}
  </span>
);

export default Avatar;
