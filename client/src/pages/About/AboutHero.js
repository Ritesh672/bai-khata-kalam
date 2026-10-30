import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, NotebookPen, PenLine } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import logo from '../../assets/images/logo.jpeg';
import { ease, fadeUp, stagger } from '../../lib/motion';
import styles from './AboutHero.module.css';

const lines = ['Rooted in Hope,', 'Driven by Purpose'];

const meaning = [
  { bn: 'বই', en: 'Book', icon: BookOpen, tone: 'blue' },
  { bn: 'খাতা', en: 'Notebook', icon: NotebookPen, tone: 'orange' },
  { bn: 'কলম', en: 'Pen', icon: PenLine, tone: 'green' },
];

const floatingFacts = [
  { value: '2024', label: 'Registered', className: styles.f1 },
  { value: '1000+', label: 'Children', className: styles.f2 },
  { value: '7', label: 'Teachers', className: styles.f3 },
];

const SEAL_TEXT = 'REGISTERED SOCIETY • NGO DARPAN LISTED • 12A REGISTERED • ';

const AboutHero = () => (
  <section className={styles.hero}>
    <span className={`${styles.blob} ${styles.blobA}`} aria-hidden="true" />
    <span className={`${styles.blob} ${styles.blobB}`} aria-hidden="true" />
    <span className={`${styles.blob} ${styles.blobC}`} aria-hidden="true" />

    <div className={`container ${styles.grid}`}>
      <motion.div className={styles.copy} variants={stagger(0.1)} initial="hidden" animate="visible">
        <motion.div variants={fadeUp}><Badge tone="orange">Our Foundation</Badge></motion.div>
        <h1 className={styles.title}>
          {lines.map((line, index) => (
            <span key={line} className={styles.line}>
              <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1 + index * 0.15, ease }}>
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p variants={fadeUp} className={styles.text}>
          Bai Khata Kalam is a non-profit organisation in Bishalgarh, Tripura, dedicated to transforming the lives of
          underprivileged children through quality education. Our name says what every child needs to begin:
        </motion.p>
        <motion.ul variants={stagger(0.08, 0.3)} className={styles.meaning}>
          {meaning.map(({ bn, en, icon: Icon, tone }) => (
            <motion.li key={en} variants={fadeUp} className={styles[tone]}>
              <span className={styles.meaningIcon}><Icon size={18} aria-hidden="true" /></span>
              <span lang="bn" className={styles.bn}>{bn}</span>
              <span className={styles.en}>{en}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        className={styles.sealWrap}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
        aria-hidden="true"
      >
        <svg className={styles.sealText} viewBox="0 0 300 300">
          <defs>
            <path id="seal-circle" d="M150,150 m-118,0 a118,118 0 1,1 236,0 a118,118 0 1,1 -236,0" />
          </defs>
          {/* circumference = 2π × 118 ≈ 741; textLength spreads one copy evenly around the circle */}
          <text><textPath href="#seal-circle" textLength="738" lengthAdjust="spacing">{SEAL_TEXT}</textPath></text>
        </svg>
        <div className={styles.sealCore}>
          <img src={logo} alt="" />
        </div>
        {floatingFacts.map((fact) => (
          <span key={fact.label} className={`${styles.fact} ${fact.className}`}>
            <strong>{fact.value}</strong> {fact.label}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutHero;
