import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, MessagesSquare, Trophy } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Reveal from '../../components/ui/Reveal';
import { mission, schoolImages } from '../../data/school';
import { fadeUp, slideFromLeft, stagger, viewportOnce } from '../../lib/motion';
import Poster from './Poster';
import styles from './Mission.module.css';

const icons = { book: BookOpen, chat: MessagesSquare, idea: Lightbulb, trophy: Trophy };

// The school's mission poster beside its four pillars, written out so they read well on every screen.
const Mission = () => (
  <section className={`section ${styles.section}`} aria-labelledby="mission-heading">
    <div className={`container ${styles.grid}`}>
      <Reveal variants={slideFromLeft} className={styles.posterCol}>
        <Poster image={schoolImages.missionPoster} caption="Our Mission, Vidyasagar Vidyapith" />
      </Reveal>

      <div>
        <Badge tone="orange">Our Mission</Badge>
        <h2 id="mission-heading" className={styles.title}>
          {mission.quote.map((line) => (
            <span key={line}>{line} </span>
          ))}
        </h2>
        <motion.ul className={styles.pillars} variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          {mission.pillars.map(({ title, text, icon, tone }) => {
            const PillarIcon = icons[icon];
            return (
              <motion.li key={title} variants={fadeUp} className={`${styles.pillar} ${styles[tone]}`}>
                <span className={styles.icon}><PillarIcon size={22} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  </section>
);

export default Mission;
