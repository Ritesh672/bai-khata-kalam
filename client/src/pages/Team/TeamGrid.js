import React from 'react';
import { motion } from 'framer-motion';
import Avatar from '../../components/ui/Avatar';
import FlipCard from '../../components/ui/FlipCard';
import SectionHeader from '../../components/ui/SectionHeader';
import { team } from '../../data/team';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';
import styles from './TeamGrid.module.css';

// Profile-style flip cards: gradient banner + overlapping avatar on the front, gradient bio on the back.
const TeamGrid = () => (
  <section className={`section ${styles.section}`} aria-labelledby="team-grid-heading">
    <div className="container">
      <SectionHeader
        id="team-grid-heading"
        badge="Meet the team"
        badgeTone="blue"
        title="Our Educators"
        subtitle="Hover or tap a card to read more about each person."
      />
      <motion.ul className={`${styles.cards} mobile-swipe`} variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        {team.map((member) => (
          <motion.li key={member.name} variants={fadeUp}>
            <FlipCard
              front={
                <div className={`${styles.front} ${styles[member.tone]}`}>
                  <div className={styles.banner}>
                    <span className={styles.org}>Bai Khata Kalam</span>
                  </div>
                  <Avatar name={member.name} tone={member.tone} size="lg" className={styles.avatar} />
                  <h3 className={styles.name}>{member.name}</h3>
                  <span className={styles.role}>{member.role}</span>
                </div>
              }
              back={
                <div className={`${styles.back} ${styles[member.tone]}`}>
                  <span className={styles.quote} aria-hidden="true">&ldquo;</span>
                  <p className={styles.bio}>{member.bio}</p>
                  <p className={styles.backName}>{member.name}</p>
                  <p className={styles.backRole}>{member.role}</p>
                </div>
              }
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default TeamGrid;
