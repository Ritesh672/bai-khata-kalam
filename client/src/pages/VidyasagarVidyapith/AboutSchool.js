import React from 'react';
import { MapPin, Phone, ShieldCheck } from 'lucide-react';
import Reveal from '../../components/ui/Reveal';
import { org } from '../../data/org';
import { images } from '../../data/images';
import { school, schoolImages } from '../../data/school';
import { slideFromRight, fadeUp } from '../../lib/motion';
import styles from './School.module.css';

const { logo, banner } = schoolImages;

// Opening section of the school page: logo, heading and school information on the left;
// the school's own signboard and press coverage on the right.
const AboutSchool = () => (
  <section className={styles.about}>
    <div className={`container ${styles.aboutGrid}`}>
      <div className={styles.aboutText}>
        <div className={styles.identity}>
          <img className={styles.schoolLogo} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
          <div className={styles.identityText}>
            <span className={styles.recognised}><ShieldCheck size={15} aria-hidden="true" /> {school.recognition}</span>
            <span className={styles.estd}><MapPin size={14} aria-hidden="true" /> Ambagan, Bishalgarh · Estd. {school.established}</span>
          </div>
        </div>
        <h1 className={styles.pageTitle}>Vidyasagar Vidyapith</h1>
        <p className={styles.tagline}>English Medium School · Empowering Young Minds Through Education</p>

        <div className={styles.calls}>
          <a href={org.phoneHref} className={styles.call}><Phone size={16} aria-hidden="true" /> {org.phone}</a>
          <a href={org.altPhoneHref} className={styles.call}><Phone size={16} aria-hidden="true" /> {org.altPhone}</a>
        </div>

        <Reveal className={styles.aboutInfo}>
          <h2>Building Foundations for Success</h2>
          <p>
            Vidyasagar Vidyapith is an English-medium school in Ambagan, Bishalgarh, run with Bai Khata Kalam.
            Together we are working to close the education gap for children from families who could never afford
            private schooling.
          </p>
          <p>
            The partnership brings Montessori-inspired, hands-on learning into the classroom, backed by Bai Khata
            Kalam&rsquo;s books, learning materials and volunteers, so every child gets a strong start.
          </p>
        </Reveal>
      </div>

      <div className={styles.showcase}>
        <Reveal variants={slideFromRight} className={styles.signboard}>
          <img src={banner.src} alt={banner.alt} width={banner.width} height={banner.height} fetchPriority="high" />
        </Reveal>
        <Reveal variants={fadeUp} delay={0.15} className={styles.collagePress}>
          <img src={images.pressClipping.src()} alt={images.pressClipping.alt} loading="lazy" width="663" height="390" />
          <span>Real coverage of our Sports Day, Feb 2026</span>
        </Reveal>
      </div>
    </div>
  </section>
);

export default AboutSchool;
