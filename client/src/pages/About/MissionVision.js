import React from 'react';
import Icon from '../../components/ui/Icon';
import Reveal from '../../components/ui/Reveal';
import { slideFromLeft, slideFromRight } from '../../lib/motion';
import styles from './MissionVision.module.css';

const items = [
  {
    title: 'Our Mission',
    icon: 'target',
    tone: 'ocean',
    text: 'To eliminate educational inequality by providing free, high-quality, Montessori-based education to children from poor families in Tripura.',
    variants: slideFromLeft,
  },
  {
    title: 'Our Vision',
    icon: 'award',
    tone: 'sunset',
    text: 'A society where every child, irrespective of their socio-economic status, has the opportunity to learn, grow, and lead.',
    variants: slideFromRight,
  },
];

// Two bold gradient statement cards.
const MissionVision = () => (
  <section className={`section ${styles.section}`}>
    <div className={`container ${styles.grid}`}>
      {items.map((item) => (
        <Reveal key={item.title} variants={item.variants} as="article" className={`${styles.card} ${styles[item.tone]}`}>
          <span className={styles.quote} aria-hidden="true">&ldquo;</span>
          <span className={styles.ring} aria-hidden="true" />
          <span className={styles.icon}><Icon name={item.icon} size={30} /></span>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </Reveal>
      ))}
    </div>
  </section>
);

export default MissionVision;
