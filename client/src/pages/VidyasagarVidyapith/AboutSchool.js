import React from 'react';
import Badge from '../../components/ui/Badge';
import Reveal from '../../components/ui/Reveal';
import StockImage from '../../components/ui/StockImage';
import { images } from '../../data/images';
import { slideFromLeft, slideFromRight, fadeUp } from '../../lib/motion';
import styles from './School.module.css';

const AboutSchool = () => (
  <section className={`section ${styles.about}`}>
    <div className={`container ${styles.aboutGrid}`}>
      <Reveal className={styles.aboutText}>
        <Badge tone="orange">About the School</Badge>
        <h2>Building Foundations for Success</h2>
        <p>
          Vidyasagar Vidyapith is an English-medium school in Ambagan, Bishalgarh, and the key partner of Bai Khata
          Kalam. Together we are working to close the education gap for children from families who could never
          afford private schooling.
        </p>
        <p>
          The partnership brings Montessori-inspired, hands-on learning into the classroom, backed by Bai Khata
          Kalam&rsquo;s books, learning materials and volunteers, so every child gets a strong start.
        </p>
      </Reveal>

      <div className={styles.collage}>
        <Reveal variants={slideFromRight} className={styles.collageMain}>
          <StockImage image={images.classroomTeacher} ratio="4 / 3" sizes="(max-width: 900px) 100vw, 520px" />
        </Reveal>
        <Reveal variants={slideFromLeft} delay={0.15} className={styles.collageSmall}>
          <StockImage image={images.blackboard} ratio="1 / 1" sizes="260px" caption={false} />
        </Reveal>
        <Reveal variants={fadeUp} delay={0.3} className={styles.collagePress}>
          <img src={images.pressClipping.src()} alt={images.pressClipping.alt} loading="lazy" width="663" height="390" />
          <span>Real coverage of our Sports Day, Feb 2026</span>
        </Reveal>
      </div>
    </div>
  </section>
);

export default AboutSchool;
