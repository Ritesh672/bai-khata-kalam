import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../../components/ui/Badge';
import Avatar from '../../components/ui/Avatar';
import { team } from '../../data/team';
import { fadeUp, stagger } from '../../lib/motion';
import styles from './Team.module.css';

// Positions around a circle for the avatar cluster.
const angleFor = (index, count) => (index / count) * 2 * Math.PI - Math.PI / 2;

const TeamHero = () => {
  const [founder, ...teachers] = team;

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <motion.div variants={stagger(0.12)} initial="hidden" animate="visible" className={styles.heroCopy}>
          <motion.div variants={fadeUp}><Badge tone="orange">Our Educators</Badge></motion.div>
          <motion.h1 variants={fadeUp}>The Hearts Behind the Mission</motion.h1>
          <motion.p variants={fadeUp}>
            A founder with a vision and a team of teachers from the community, working every day to give the
            children of Bishalgarh a better start.
          </motion.p>
        </motion.div>

        <div className={styles.cluster} aria-hidden="true">
          <motion.div
            className={styles.clusterCenter}
            style={{ x: '-50%', y: '-50%' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.2 }}
          >
            <Avatar name={founder.name} photo={founder.photo || founder.placeholder} tone={founder.tone} size="lg" />
          </motion.div>
          {teachers.map((member, index) => {
            const angle = angleFor(index, teachers.length);
            return (
              <motion.div
                key={member.name}
                className={styles.clusterItem}
                style={{ left: `${50 + 40 * Math.cos(angle)}%`, top: `${50 + 40 * Math.sin(angle)}%`, x: '-50%', y: '-50%' }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.4 + index * 0.08 }}
              >
                <Avatar name={member.name} photo={member.photo || member.placeholder} tone={member.tone} size="md" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
