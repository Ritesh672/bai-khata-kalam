import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Languages, MapPin, Sprout, Users } from 'lucide-react';
import { scaleIn, stagger, viewportOnce } from '../../lib/motion';
import styles from './AtAGlance.module.css';

const facts = [
  { icon: MapPin, label: 'Location', value: 'Ambagan, Bishalgarh', tone: 'orange' },
  { icon: Languages, label: 'Medium', value: 'English', tone: 'blue' },
  { icon: Users, label: 'Students', value: '37+', sub: 'in 2026', tone: 'green' },
  { icon: GraduationCap, label: 'Teachers', value: '7', sub: 'dedicated educators', tone: 'purple' },
  { icon: BookOpen, label: 'Principal', value: 'Bidhan Das', tone: 'pink' },
  { icon: Sprout, label: 'Approach', value: 'Montessori', sub: 'hands-on learning', tone: 'teal' },
];

// Sticker-style fact cards: a gradient icon badge floats over each pastel card.
const AtAGlance = () => (
  <section className={styles.section} aria-labelledby="glance-heading">
    <div className="container">
      <h2 id="glance-heading" className={styles.title}>School at a glance</h2>
      <motion.ul className={styles.list} variants={stagger(0.07)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        {facts.map(({ icon: Icon, label, value, sub, tone }) => (
          <motion.li key={label} variants={scaleIn} whileHover={{ y: -8, rotate: -1.5 }} className={`${styles.card} ${styles[tone]}`}>
            <span className={styles.badge}><Icon size={24} aria-hidden="true" /></span>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
            {sub && <span className={styles.sub}>{sub}</span>}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default AtAGlance;
