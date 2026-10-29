import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Users } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import VideoFacade from '../../components/ui/VideoFacade';
import { fadeUp, slideFromRight, stagger, viewportOnce } from '../../lib/motion';
import styles from './Video.module.css';

const highlights = [
  { icon: Sparkles, title: 'Montessori classrooms', text: 'Hands-on learning for young children', tone: 'amber' },
  { icon: Trophy, title: 'Annual Sports Day', text: 'Six events, parents and community together', tone: 'pink' },
  { icon: Users, title: 'Local teachers', text: 'From the same villages as the children', tone: 'cyan' },
];

const VideoSection = () => (
  <section className={styles.section} aria-labelledby="video-heading">
    <div className={styles.grid} aria-hidden="true" />
    <div className={`container ${styles.layout}`}>
      <motion.div className={styles.copy} variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <motion.div variants={fadeUp}><Badge tone="blue">Watch our story</Badge></motion.div>
        <motion.h2 variants={fadeUp} id="video-heading">See Our Work in Action</motion.h2>
        <motion.p variants={fadeUp} className={styles.lead}>
          Watch how your support is transforming lives through education.
        </motion.p>
        <motion.ul variants={stagger(0.08)} className={styles.highlights}>
          {highlights.map(({ icon: HighlightIcon, title, text, tone }) => (
            <motion.li key={title} variants={fadeUp} className={styles[tone]}>
              <span className={styles.hIcon}><HighlightIcon size={20} aria-hidden="true" /></span>
              <span>
                <strong>{title}</strong>
                <span className={styles.hText}>{text}</span>
              </span>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div variants={fadeUp}>
          <Button to="/donate" variant="orange" size="lg">Support Our Mission</Button>
        </motion.div>
      </motion.div>

      <motion.div className={styles.stage} variants={slideFromRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        <div className={styles.ring} aria-hidden="true" />
        <div className={styles.frame}>
          <VideoFacade videoId="FRRPwUQqYJ8" title="Bai Khata Kalam: our work in action" />
        </div>
        <span className={`${styles.chip} ${styles.chipTop}`} aria-hidden="true">▶ Real stories from Tripura</span>
        <span className={`${styles.chip} ${styles.chipBottom}`} aria-hidden="true">♥ Powered by donors like you</span>
      </motion.div>
    </div>
  </section>
);

export default VideoSection;
