import React from 'react';
import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '../../components/ui/Reveal';
import { org } from '../../data/org';
import { slideFromLeft } from '../../lib/motion';
import styles from './Contact.module.css';

const items = [
  { icon: MapPin, title: 'Our Address', content: org.address },
  { icon: Phone, title: 'Phone Number', content: <a href={org.phoneHref}>{org.phone}</a> },
  { icon: Mail, title: 'Email Address', content: <a href={`mailto:${org.email}`}>{org.email}</a> },
  { icon: Clock, title: 'Best time to reach us', content: 'Monday to Saturday, during school hours' },
];

const ContactDetails = () => (
  <Reveal variants={slideFromLeft} className={styles.details}>
    <div className={styles.infoCard}>
      <h2>Contact Information</h2>
      <p className={styles.infoIntro}>Reach out to us through any of these channels.</p>
      <ul className={styles.infoList}>
        {items.map(({ icon: Icon, title, content }) => (
          <li key={title}>
            <span className={styles.infoIcon}><Icon size={22} aria-hidden="true" /></span>
            <div>
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <a href={org.mapsHref} target="_blank" rel="noopener noreferrer" className={styles.mapCard}>
      <span className={styles.mapGrid} aria-hidden="true" />
      <span className={styles.mapPin} aria-hidden="true"><MapPin size={30} /></span>
      <span className={styles.mapLabel}>
        <strong>Bishalgarh, Tripura</strong>
        <span>Open in Google Maps <ExternalLink size={14} aria-hidden="true" /></span>
      </span>
    </a>
  </Reveal>
);

export default ContactDetails;
