import React from 'react';
import { MessageCircle } from 'lucide-react';
import Accordion from '../../components/ui/Accordion';
import Button from '../../components/ui/Button';
import Reveal from '../../components/ui/Reveal';
import { contactFaqs } from '../../data/faqs';
import { org } from '../../data/org';
import styles from './Contact.module.css';

const FAQSection = () => (
  <section className={`section ${styles.faq}`}>
    <div className={`container ${styles.faqGrid}`}>
      <Reveal className={styles.faqIntro}>
        <h2>Have more questions?</h2>
        <p>Here are answers to the questions we hear most often. Still unsure? Message us directly on WhatsApp.</p>
        <Button href={org.whatsappHref} icon={<MessageCircle size={18} aria-hidden="true" />}>Chat on WhatsApp</Button>
      </Reveal>
      <Accordion items={contactFaqs} />
    </div>
  </section>
);

export default FAQSection;
