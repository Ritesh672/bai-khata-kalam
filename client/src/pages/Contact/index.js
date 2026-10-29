import React from 'react';
import PageMeta from '../../components/layout/PageMeta';
import ContactHero from './ContactHero';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import FAQSection from './FAQSection';
import styles from './Contact.module.css';

const Contact = () => (
  <>
    <PageMeta
      title="Contact Bai Khata Kalam | Bishalgarh, Tripura"
      description="Contact Bai Khata Kalam in Bishalgarh, Sepahijala, Tripura 799102. Call or WhatsApp +91 9436362026 to volunteer, partner or ask a question."
      path="/contact"
    />
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
