import React from 'react';
import PageMeta from '../../components/layout/PageMeta';
import ContactHero from './ContactHero';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import FAQSection from './FAQSection';
import styles from './Contact.module.css';

const Contact = () => (
  <>
    <PageMeta page="contact" />
    <ContactHero />
    <section className={`section ${styles.main}`}>
      <div className={`container ${styles.mainGrid}`}>
        <ContactDetails />
        <ContactForm />
      </div>
    </section>
    <FAQSection />
  </>
);

export default Contact;
