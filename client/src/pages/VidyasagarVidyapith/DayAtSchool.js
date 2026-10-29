import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionHeader from '../../components/ui/SectionHeader';
import { schoolDay } from '../../data/programs';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';
import styles from './School.module.css';

// Horizontal timeline whose line fills as the section scrolls through the viewport.
const DayAtSchool = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section ref={ref} className={`section ${styles.day}`}>
      <div className="container">
        <SectionHeader
          badge="Inside the classroom"
          title="A Day at School"
          subtitle="How a typical day flows for our young learners."
          dark
        />
        <div className={styles.timeline}>
          <div className={styles.track} aria-hidden="true">
            <motion.div className={styles.trackFill} style={{ scaleX: progress }} />
          </div>
          <motion.ol
            className={styles.steps}
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {schoolDay.map((step, index) => (
              <motion.li key={step.title} variants={fadeUp} className={styles.step}>
                <span className={styles.stepDot}>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
};

export default DayAtSchool;
