import React from 'react';
import Icon from './Icon';
import styles from './IconBox.module.css';

// Tinted square holding an icon. tone: blue | green | orange | purple | red | light
const IconBox = ({ name, tone = 'blue', size = 'md', className = '' }) => (
  <span className={`${styles.box} ${styles[tone]} ${styles[size]} ${className}`}>
    <Icon name={name} size={size === 'lg' ? 30 : 24} />
  </span>
);

export default IconBox;
