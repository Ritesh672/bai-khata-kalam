import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import Button from '../../ui/Button';
import { org } from '../../../data/org';
import styles from './Footer.module.css';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Vidyasagar Vidyapith', path: '/vidyasagar-vidyapith' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Impact', path: '/impact' },
  { name: 'Our Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
  { name: 'Donate', path: '/donate' },
];

const trustItems = ['Govt. Registered NGO', 'NGO Darpan Listed', '12A Registered (Provisional)'];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.grid}`}>
      <div>
        <Link to="/" className={styles.brand}>Bai Khata Kalam</Link>
        <p className={styles.desc}>{org.tagline}</p>
        <ul className={styles.trust}>
          {trustItems.map((item) => (
            <li key={item}><ShieldCheck size={15} aria-hidden="true" /> {item}</li>
          ))}
        </ul>
        <p className={styles.reg}>Reg. No. {org.registrationNo} · NGO Darpan {org.darpanId}</p>
      </div>

      <nav aria-label="Footer">
        <h2 className={styles.heading}>Quick Links</h2>
        <ul className={styles.links}>
          {quickLinks.map((link) => (
            <li key={link.path}><Link to={link.path}>{link.name}</Link></li>
          ))}
        </ul>
      </nav>

      <div>
        <h2 className={styles.heading}>Contact Us</h2>
        <ul className={styles.contact}>
          <li><MapPin size={18} aria-hidden="true" /> <a href={org.mapsHref} target="_blank" rel="noopener noreferrer">{org.address}</a></li>
          <li><Phone size={18} aria-hidden="true" /> <a href={org.phoneHref}>{org.phone}</a></li>
          <li><Mail size={18} aria-hidden="true" /> <a href={`mailto:${org.email}`}>{org.email}</a></li>
        </ul>
      </div>

      <div>
        <h2 className={styles.heading}>Stay Connected</h2>
        <p className={styles.desc}>Get updates from our school and hear how your support is making a difference.</p>
        <Button href={org.whatsappHref} variant="primary" size="sm" icon={<MessageCircle size={18} aria-hidden="true" />}>
          Chat on WhatsApp
        </Button>
      </div>
    </div>

    <div className={styles.bottom}>
      <div className={`container ${styles.bottomInner}`}>
        <p>&copy; {new Date().getFullYear()} Bai Khata Kalam. All rights reserved.</p>
        <button type="button" className={styles.top} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top <ArrowUp size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
