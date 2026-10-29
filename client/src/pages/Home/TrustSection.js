import React from 'react';
import { BadgeCheck, Building2, CalendarCheck, FileCheck2, Landmark, MapPin, ReceiptText, School } from 'lucide-react';
import Marquee from '../../components/ui/Marquee';
import { org } from '../../data/org';
import styles from './Home.module.css';

// Every registration ID, from the NGO's own certificates.
const facts = [
  { label: 'Registered Society', value: `No. ${org.registrationNo}`, icon: Landmark, tone: 'orange' },
  { label: 'NGO Darpan ID', value: org.darpanId, icon: BadgeCheck, tone: 'green' },
  { label: '12A (Provisional) URN', value: org.twelveAUrn, icon: FileCheck2, tone: 'blue' },
  { label: 'PAN', value: org.pan, icon: ReceiptText, tone: 'purple' },
  { label: 'Udyam (MSME)', value: org.udyam, icon: Building2, tone: 'pink' },
  { label: 'Registered On', value: org.registeredOn, icon: CalendarCheck, tone: 'teal' },
  { label: 'Partner School', value: 'Vidyasagar Vidyapith', icon: School, tone: 'amber' },
  { label: 'Location', value: 'Ambagan, Bishalgarh, Tripura', icon: MapPin, tone: 'orange' },
];

const TrustSection = () => (
  <section className={styles.trust} aria-label="Registration details">
    <Marquee items={facts} speed={55} />
  </section>
);

export default TrustSection;
