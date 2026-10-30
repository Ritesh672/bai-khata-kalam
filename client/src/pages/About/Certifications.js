import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, ExternalLink, ShieldCheck } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Icon from '../../components/ui/Icon';
import TiltCard from '../../components/ui/TiltCard';
import CertificateGallery from '../../components/sections/CertificateGallery';
import { legalDocuments, pledges } from '../../data/certificates';
import { fadeUp, stagger, viewportOnce } from '../../lib/motion';
import styles from './Certifications.module.css';

// Shown right after the hero: credential-style cards with each official ID, then the pledges.
const Certifications = () => (
  <section className={`section ${styles.section}`}>
    <div className="container">
      <SectionHeader
        badge="Legal Compliance"
        title="Our Certifications & Legal Status"
        subtitle="We are a legally registered non-profit organisation. Every document below can be checked."
      />

      <motion.ul className={`${styles.grid} mobile-swipe`} variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        {legalDocuments.map((doc) => (
          <motion.li key={doc.title} variants={fadeUp}>
            <TiltCard className={`${styles.card} ${styles[doc.tone]}`} max={6}>
              <span className={styles.slot} aria-hidden="true" />
              <div className={styles.head}>
                <span className={styles.icon}><Icon name={doc.icon} size={26} /></span>
                <h3>{doc.title}</h3>
                <span className={styles.stamp}><BadgeCheck size={14} aria-hidden="true" /> Verified</span>
              </div>
              <div className={styles.body}>
                <p className={styles.idLabel}>{doc.idLabel}</p>
                <p className={styles.idValue}>{doc.idValue}</p>
                <p className={styles.issuer}>{doc.issuer}</p>
                <p className={styles.text}>{doc.text}</p>
                <a href={doc.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  View document <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </TiltCard>
          </motion.li>
        ))}
      </motion.ul>

      <div className={styles.pledges}>
        <h3 className={styles.pledgeHeading}>Pledges we&rsquo;ve taken</h3>
        <p className={styles.pledgeIntro}>
          We have publicly committed to these Government of India campaigns and carry them into our work with families.
        </p>
        <CertificateGallery items={pledges} />
      </div>

      <p className={styles.statement}>
        <ShieldCheck size={22} aria-hidden="true" />
        Registered society No. 9481 of 2024 · NGO Darpan TR/2025/0713069
      </p>
    </div>
  </section>
);

export default Certifications;
