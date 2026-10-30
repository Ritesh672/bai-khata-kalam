import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import Icon from '../../components/ui/Icon';
import TiltCard from '../../components/ui/TiltCard';
import Reveal from '../../components/ui/Reveal';
import StockImage from '../../components/ui/StockImage';
import { directImpact } from '../../data/programs';
import { images } from '../../data/images';
import styles from './DirectImpact.module.css';

const palettes = ['blue', 'green', 'pink'];

// Colour-block cards: each programme has its own gradient, icon tile and number.
const ImpactCard = ({ item, index, image }) => (
  <TiltCard className={`${styles.card} ${styles[palettes[index]]}`}>
    {image && (
      <div className={styles.media}>
        <StockImage image={image} ratio="16 / 9" sizes="(max-width: 900px) 100vw, 600px" />
      </div>
    )}
    <div className={styles.body}>
      <div className={styles.top}>
        <span className={styles.icon}><Icon name={item.icon} size={28} /></span>
        <span className={styles.number} aria-hidden="true">0{index + 1}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </div>
    <span className={styles.blob} aria-hidden="true" />
  </TiltCard>
);

const DirectImpactSection = () => {
  const [featured, ...others] = directImpact;

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader
          title="Our Direct Impact"
          subtitle="Small steps lead to great journeys. Here's how we are changing lives on the ground in Tripura."
        />
        <div className={`${styles.grid} mobile-swipe`}>
          <Reveal className={styles.featured}>
            <ImpactCard item={featured} index={0} image={images.classroomDesks} />
          </Reveal>
          <div className={styles.stack}>
            {others.map((item, index) => (
              <Reveal key={item.title} delay={0.12 * (index + 1)}>
                <ImpactCard item={item} index={index + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectImpactSection;
