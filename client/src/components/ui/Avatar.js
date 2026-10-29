import React from 'react';
import { initials } from '../../data/team';
import styles from './Avatar.module.css';

// Initials monogram used for people until real, consented photos are available.
const Avatar = ({ name, tone = 'blue', size = 'md', className = '' }) => (
  <span className={`${styles.avatar} ${styles[tone]} ${styles[size]} ${className}`} aria-hidden="true">
    {initials(name)}
  </span>
);

export default Avatar;
