import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, HandHeart } from 'lucide-react';
import Button from '../../components/ui/Button';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';
import styles from './Team.module.css';

const options = [
  {
    icon: HandHeart,
    title: 'Volunteer',
    text: 'Read with children, help at events, or share a skill like art, music, sport or design. In person or online.',
  },
  {
    icon: GraduationCap,
    title: 'Teach with us',
    text: 'Passionate about early education? We’re always glad to hear from teachers who want to make a difference in Tripura.',
  },
];

const JoinCTA = () => (
  <section className={`section ${styles.join}`} aria-labelledby="join-heading">
    <div className="container">
      <motion.div className={styles.joinHead} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <h2 id="join-heading">Want to join our team?</h2>
        <p>We are always looking for passionate volunteers and educators to join our cause.</p>
      </motion.div>
      <motion.ul className={styles.joinGrid} variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        {options.map(({ icon: Icon, title, text }) => (
          <motion.li key={title} variants={fadeUp} className={styles.joinCard}>
            <Icon size={34} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.li>
        ))}
      </motion.ul>
      <div className={styles.joinAction}>
        <Button to="/contact" size="lg">Become a Volunteer</Button>
      </div>
    </div>
  </section>
);

export default JoinCTA;
