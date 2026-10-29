import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, Package } from 'lucide-react';
import Button from '../../components/ui/Button';
import { fadeUp, scaleIn, stagger, viewportOnce } from '../../lib/motion';
import styles from './CTA.module.css';

const amounts = [
  { value: 500, label: '₹500', text: 'School supplies for one child', icon: Package },
  { value: 2000, label: '₹2,000', text: 'A month of learning materials', icon: BookOpen, popular: true },
  { value: 5000, label: '₹5,000', text: 'A full term of education', icon: GraduationCap },
];

// Home-only closing section: vibrant gradient panel with quick-donate amount cards.
const CTASection = () => (
  <section className={styles.section} aria-labelledby="home-cta">
    <div className="container">
      <div className={styles.panel}>
        <span className={`${styles.bubble} ${styles.b1}`} aria-hidden="true" />
        <span className={`${styles.bubble} ${styles.b2}`} aria-hidden="true" />
        <span className={`${styles.bubble} ${styles.b3}`} aria-hidden="true" />

        <motion.div className={styles.copy} variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <motion.h2 variants={fadeUp} id="home-cta">Ready to change a child&rsquo;s life?</motion.h2>
          <motion.p variants={fadeUp}>
            Your small contribution can provide a lifetime of opportunities. Join us in our mission to educate
            Tripura&rsquo;s future.
          </motion.p>
          <motion.div variants={fadeUp} className={styles.actions}>
            <Button to="/donate" size="lg">Join the Mission</Button>
            <Button to="/vidyasagar-vidyapith" variant="outline" size="lg">Visit Our School</Button>
          </motion.div>
        </motion.div>

        <motion.ul className={styles.amounts} variants={stagger(0.1, 0.2)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          {amounts.map(({ value, label, text, icon: AmountIcon, popular }) => (
            <motion.li key={value} variants={scaleIn}>
              <Link to={`/donate?amount=${value}`} className={`${styles.amount} ${popular ? styles.popular : ''}`}>
                {popular && <span className={styles.tag}>Most chosen</span>}
                <span className={styles.amountIcon}><AmountIcon size={22} aria-hidden="true" /></span>
                <span className={styles.amountText}>
                  <strong>{label}</strong>
                  <span>{text}</span>
                </span>
                <ArrowRight className={styles.arrow} size={20} aria-hidden="true" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  </section>
);

export default CTASection;
