import React from 'react';
import { Calendar, MapPin, MessageCircle } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Reveal from '../../components/ui/Reveal';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import StockImage from '../../components/ui/StockImage';
import { events } from '../../data/events';
import { images } from '../../data/images';
import { org } from '../../data/org';
import { slideFromLeft, slideFromRight } from '../../lib/motion';
import styles from './Home.module.css';

const EventsSection = () => {
  const [featured] = events;

  return (
    <section className={`section ${styles.events}`}>
      <div className="container">
        <SectionHeader badge="Recent Events" title="Events That Make a Difference" align="left" />
        <div className={styles.eventsGrid}>
          <Reveal variants={slideFromLeft} as="article" className={styles.eventFeatured}>
            <div className={styles.eventImage}>
              <img src={featured.image.src()} alt={featured.image.alt} loading="lazy" width="663" height="390" />
            </div>
            <div className={styles.eventBody}>
              <Badge tone="blue">{featured.tag}</Badge>
              <h3>{featured.title}</h3>
              <ul className={styles.eventMeta}>
                <li><Calendar size={16} aria-hidden="true" /> <time dateTime={featured.dateTime}>{featured.date}</time></li>
                <li><MapPin size={16} aria-hidden="true" /> {featured.location}</li>
              </ul>
              <p>{featured.text}</p>
            </div>
          </Reveal>

          <Reveal variants={slideFromRight} className={styles.eventSide}>
            <StockImage image={images.happyStudents} ratio="4 / 3" sizes="(max-width: 900px) 100vw, 400px" />
            <div className={styles.eventSideBody}>
              <h3>Join our next event</h3>
              <p>Sports days, book drives and parent meetings: we&rsquo;d love volunteers and well-wishers to be part of them.</p>
              <Button href={org.whatsappHref} size="sm" icon={<MessageCircle size={18} aria-hidden="true" />}>
                Get event updates
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
