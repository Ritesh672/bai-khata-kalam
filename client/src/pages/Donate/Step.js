import React from 'react';
import styles from './Donate.module.css';

// Numbered step wrapper used by the three parts of the donation form.
const Step = ({ number, title, children }) => (
  <fieldset className={styles.step}>
    <legend className={styles.stepLegend}>
      <span className={styles.stepNumber}>{number}</span>
      {title}
    </legend>
    {children}
  </fieldset>
);

export default Step;
