import React, { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import styles from './Marquee.module.css';

/*
 * Continuously scrolling ticker that moves left. The list is rendered twice for a seamless loop
 * (the copy is hidden from screen readers). It always moves, so it has a pause button
 * (WCAG 2.2.2) and also pauses on hover and keyboard focus.
 * items: [{ label, value, icon: LucideComponent, tone }]
 */
const Marquee = ({ items, speed = 40 }) => {
  const [paused, setPaused] = useState(false);

  return (
    <div className={`${styles.wrap} ${paused ? styles.paused : ''}`}>
      <div className={styles.viewport}>
        <div className={styles.track} data-allow-motion style={{ animationDuration: `${speed}s` }}>
          {[0, 1].map((copy) => (
            <ul key={copy} className={styles.list} aria-hidden={copy === 1 ? 'true' : undefined}>
              {items.map(({ label, value, icon: Icon, tone }) => (
                <li key={label} className={`${styles.item} ${styles[tone] || ''}`}>
                  {Icon && <span className={styles.icon}><Icon size={16} aria-hidden="true" /></span>}
                  <span className={styles.label}>{label}</span>
                  {value && <span className={styles.value}>{value}</span>}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setPaused((value) => !value)}
        aria-label={paused ? 'Play scrolling registration details' : 'Pause scrolling registration details'}
      >
        {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      </button>
    </div>
  );
};

export default Marquee;
