import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/ui/SectionHeader';
import Icon from '../../components/ui/Icon';
import { collaboration } from '../../data/programs';
import { images } from '../../data/images';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';
import styles from './Collaboration.module.css';

const tones = ['blue', 'sunset', 'emerald', 'violet'];
const tileImages = [images.classroomTeacher, null, null, images.studentsListening];

// Bento grid of full-colour gradient tiles; the two large tiles carry a photo.
const Collaboration = () => (
  <section className={`section ${styles.section}`}>
    <div className="container">
      <SectionHeader
        badge="Our Collaboration"
        title="How We Work Together"
        subtitle="A multi-faceted approach to improving educational outcomes."
      />
      <motion.ul className={styles.bento} variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        {collaboration.map((item, index) => {
          const image = tileImages[index];
          return (
            <motion.li
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={`${styles.tile} ${styles[tones[index]]} ${item.size === 'large' ? styles.large : ''}`}
            >
              <div className={styles.content}>
                <span className={styles.icon}><Icon name={item.icon} size={28} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              {image && (
                <div className={styles.photo}>
                  <img src={image.src(600)} alt="" loading="lazy" />
                  <span className={styles.photoCredit}>Representative image · {image.credit} / Unsplash</span>
                </div>
              )}
              <span className={styles.number} aria-hidden="true">0{index + 1}</span>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  </section>
);

export default Collaboration;
