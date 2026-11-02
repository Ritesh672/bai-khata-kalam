import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ClipboardCheck, Flag, Music, Phone, Cake } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Reveal from '../../components/ui/Reveal';
import { org } from '../../data/org';
import { fees, schoolImages } from '../../data/school';
import { fadeUp, slideFromRight, stagger, viewportOnce } from '../../lib/motion';
import Poster from './Poster';
import styles from './Fees.module.css';

const icons = { calendar: CalendarDays, exam: ClipboardCheck, flag: Flag, music: Music, cake: Cake };
const rupees = (amount) => `₹${amount.toLocaleString('en-IN')}`;
const monthly = fees.find((fee) => fee.icon === 'calendar').amount;

// The school's published yearly fees as a clean receipt-style list, with the original notice beside it.
const Fees = () => (
  <section className={`section ${styles.section}`} aria-labelledby="fees-heading">
    <div className={`container ${styles.grid}`}>
      <div>
        <Badge tone="green">Admissions</Badge>
        <h2 id="fees-heading" className={styles.title}>Yearly Fees Structure</h2>
        <p className={styles.subtitle}>Quality English-medium education at a fee families can manage.</p>

        <motion.ul className={styles.receipt} variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          {fees.map(({ title, note, amount, icon, tone }) => {
            const FeeIcon = icons[icon];
            return (
              <motion.li key={title} variants={fadeUp} className={`${styles.row} ${styles[tone]}`}>
                <span className={styles.icon}><FeeIcon size={20} aria-hidden="true" /></span>
                <span className={styles.what}>
                  <strong>{title}</strong>
                  <span>{note}</span>
                </span>
                <span className={styles.amount}>{rupees(amount)}</span>
              </motion.li>
            );
          })}
        </motion.ul>
        <p className={styles.summary}>Monthly fees come to {rupees(monthly * 12)} for the whole year.</p>

        <div className={styles.admissions}>
          <span>For admissions, call</span>
          <a href={org.phoneHref}><Phone size={15} aria-hidden="true" /> {org.phone}</a>
          <a href={org.altPhoneHref}><Phone size={15} aria-hidden="true" /> {org.altPhone}</a>
        </div>
      </div>

      <Reveal variants={slideFromRight} className={styles.posterCol}>
        <Poster image={schoolImages.feesPoster} caption="Yearly fees structure, Vidyasagar Vidyapith" className={styles.poster} />
      </Reveal>
    </div>
  </section>
);

export default Fees;
