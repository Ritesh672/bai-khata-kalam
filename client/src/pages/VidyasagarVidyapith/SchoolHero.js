import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import { images } from '../../data/images';
import { fadeUp, stagger } from '../../lib/motion';
import styles from './School.module.css';

const hero = images.hillSchool;

const SchoolHero = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1.05, 1.18]);

  return (
    <section className={styles.hero}>
      <motion.img
        className={styles.heroImage}
        src={hero.src(1600)}
        srcSet={[800, 1200, 1600, 2000].map((w) => `${hero.src(w)} ${w}w`).join(', ')}
        sizes="100vw"
        alt=""
        style={{ scale }}
        fetchPriority="high"
      />
      <div className={styles.heroOverlay} />
      <motion.div className={`container ${styles.heroContent}`} variants={stagger(0.12)} initial="hidden" animate="visible">
        <motion.div variants={fadeUp}>
          <Badge tone="light"><MapPin size={15} aria-hidden="true" /> Partner School · Ambagan, Bishalgarh</Badge>
        </motion.div>
        <motion.h1 variants={fadeUp} className={styles.heroTitle}>Vidyasagar Vidyapith</motion.h1>
        <motion.p variants={fadeUp} className={styles.heroText}>Empowering Young Minds Through Education</motion.p>
      </motion.div>
      <p className={styles.heroCredit}>
        Representative image · Photo: <a href={hero.page} target="_blank" rel="noopener noreferrer">{hero.credit}</a> / Unsplash
      </p>
    </section>
  );
};

export default SchoolHero;
