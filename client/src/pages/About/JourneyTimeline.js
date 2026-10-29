import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionHeader from '../../components/ui/SectionHeader';
import { timeline } from '../../data/timeline';
import { slideFromLeft, slideFromRight, viewportOnce } from '../../lib/motion';
import styles from './About.module.css';

const tones = ['amber', 'pink', 'blue', 'green'];

// Vertical timeline: the centre line draws itself as you scroll; each year has its own colour.
const JourneyTimeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section className={`section ${styles.journey}`}>
      <div className="container">
        <SectionHeader title="Our Journey So Far" subtitle="From an idea in 2023 to a school full of learners." />
        <div ref={ref} className={styles.timeline}>
          <div className={styles.line} aria-hidden="true">
            <motion.div className={styles.lineFill} style={{ scaleY: lineScale }} />
          </div>
          <ol>
            {timeline.map((item, index) => {
              const left = index % 2 === 0;
              return (
                <motion.li
                  key={item.year}
                  className={`${styles.milestone} ${left ? styles.left : styles.right} ${styles[tones[index % tones.length]]}`}
                  variants={left ? slideFromLeft : slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  <span className={styles.dot} aria-hidden="true" />
                  <div className={styles.milestoneCard}>
                    <span className={styles.year}>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
