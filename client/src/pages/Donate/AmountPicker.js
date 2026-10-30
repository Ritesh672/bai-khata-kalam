import React from 'react';
import { motion } from 'framer-motion';
import Step from './Step';
import { presets } from '../../data/donation';
import styles from './Donate.module.css';

const AmountPicker = ({ amount, onChange }) => {
  const isPreset = presets.includes(amount);

  return (
    <Step number={1} title="Choose an amount">
      <div className={styles.presets}>
        {presets.map((preset) => {
          const active = amount === preset;
          return (
            <button
              key={preset}
              type="button"
              className={`${styles.preset} ${active ? styles.presetActive : ''}`}
              aria-pressed={active}
              onClick={() => onChange(preset)}
            >
              {active && <motion.span layoutId="preset-highlight" className={styles.presetHighlight} />}
              <span className={styles.presetText}>₹{Number(preset).toLocaleString('en-IN')}</span>
            </button>
          );
        })}
      </div>
      <label htmlFor="custom-amount" className={styles.label}>Or enter a custom amount (₹)</label>
      <input
        id="custom-amount"
        className={styles.input}
        type="number"
        inputMode="numeric"
        min="1"
        step="1"
        placeholder="Other amount (₹)"
        value={isPreset ? '' : amount}
        onChange={(event) => onChange(event.target.value)}
      />
    </Step>
  );
};

export default AmountPicker;
