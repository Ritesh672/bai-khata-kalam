import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import HeroVisual from '../../components/three/HeroVisual';
import { ease, fadeUp, stagger } from '../../lib/motion';
import styles from './Home.module.css';

const HeroSection = () => (
  <section className={styles.hero}>
    <div className={`container ${styles.heroGrid}`}>
      <motion.div variants={stagger(0.12)} initial="hidden" animate="visible">
        <motion.div variants={fadeUp}><Badge tone="orange">Education for All</Badge></motion.div>
        {/* The H1 is never hidden: it's the largest element on screen, so it renders immediately. */}
        <h1 className={styles.heroTitle}>
          Every Child Deserves{' '}
          <span className={styles.highlight}>
            Quality Education
            <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
              <motion.path
                d="M4 14 C 80 4, 200 4, 296 12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.4, ease }}
              />
            </svg>
          </span>
        </h1>
        <motion.p variants={fadeUp} className={styles.heroText}>
          Empowering underprivileged children in Tripura with Montessori-based learning, books and the steady,
          long-term support they need to stay in school and thrive.
        </motion.p>
        <motion.div variants={fadeUp} className={styles.heroActions}>
          <Button to="/donate" size="lg">Donate Now</Button>
          <Button to="/contact" variant="outline" size="lg">Partner With Us</Button>
        </motion.div>
      </motion.div>

      <HeroVisual>
        <motion.div
          className={styles.floatingCard}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease }}
        >
          <Heart className={styles.heart} fill="currentColor" aria-hidden="true" />
          <div>
            <p className={styles.floatingTitle}>37+ Students</p>
            <p className={styles.floatingText}>Learning for free</p>
          </div>
        </motion.div>
      </HeroVisual>
    </div>
  </section>
);

export default HeroSection;
