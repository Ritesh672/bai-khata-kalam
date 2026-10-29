import React from 'react';
import Badge from '../../components/ui/Badge';
import Avatar from '../../components/ui/Avatar';
import Reveal from '../../components/ui/Reveal';
import { org } from '../../data/org';
import { scaleIn, fadeUp } from '../../lib/motion';
import styles from './About.module.css';

// Magazine-style spread: monogram portrait on the left, large pull quote on the right.
const FounderMessage = () => (
  <section className={`section ${styles.founder}`}>
    <div className={`container ${styles.founderGrid}`}>
      <Reveal variants={scaleIn} className={styles.portrait}>
        <div className={styles.portraitRing}>
          <Avatar name={org.founder} size="lg" tone="blue" />
        </div>
        <p className={styles.portraitName}>{org.founder}</p>
        <p className={styles.portraitRole}>{org.founderRole}</p>
      </Reveal>

      <Reveal variants={fadeUp} className={styles.founderText}>
        <Badge tone="orange">Founder&rsquo;s Message</Badge>
        <h2>&ldquo;Education is the most powerful weapon&rdquo;</h2>
        <blockquote className={styles.pullQuote}>
          <p>
            We believe that a child&rsquo;s background should not determine their future. At Bai Khata Kalam, we are
            not just teaching subjects; <mark>we are building characters</mark> and providing the tools for a
            better tomorrow.
          </p>
          <footer>{org.founder}, {org.founderRole}</footer>
        </blockquote>
      </Reveal>
    </div>
  </section>
);

export default FounderMessage;
