import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import { org } from '../../data/org';
import { fadeUp, stagger } from '../../lib/motion';
import styles from './Contact.module.css';

const channels = [
  { icon: MessageCircle, label: 'WhatsApp', detail: 'Fastest reply', href: org.whatsappHref, tone: 'green', external: true },
  { icon: Phone, label: 'Call us', detail: org.phone, href: org.phoneHref, tone: 'blue' },
  { icon: Mail, label: 'Email', detail: org.email, href: `mailto:${org.email}`, tone: 'orange' },
];

const ContactHero = () => (
  <section className={styles.hero}>
    <motion.div className={`container ${styles.heroInner}`} variants={stagger(0.1)} initial="hidden" animate="visible">
      <motion.div variants={fadeUp}><Badge tone="blue">Get in Touch</Badge></motion.div>
      <motion.h1 variants={fadeUp}>We&rsquo;d Love to Hear From You</motion.h1>
      <motion.p variants={fadeUp} className={styles.heroText}>
        Whether you want to volunteer, partner, or just say hello, our doors are always open.
      </motion.p>
      <motion.ul variants={stagger(0.08, 0.2)} className={styles.channels}>
        {channels.map(({ icon: Icon, label, detail, href, tone, external }) => (
          <motion.li key={label} variants={fadeUp}>
            <a
              href={href}
              className={`${styles.channel} ${styles[`channel_${tone}`]}`}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className={styles.channelIcon}><Icon size={24} aria-hidden="true" /></span>
              <span>
                <span className={styles.channelLabel}>{label}</span>
                <span className={styles.channelDetail}>{detail}</span>
              </span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  </section>
);

export default ContactHero;
