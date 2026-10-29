import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Mail, MessageSquare, Send } from 'lucide-react';
import Button from '../../components/ui/Button';
import Reveal from '../../components/ui/Reveal';
import { org, whatsappLink } from '../../data/org';
import { slideFromRight } from '../../lib/motion';
import styles from './Contact.module.css';

const SUBJECTS = ['Donation Inquiry', 'Volunteer Opportunity', 'Partnership', 'Admissions', 'Other'];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = ({ name, email, subject, message }) => {
  const errors = {};
  if (!name.trim()) errors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(email.trim())) errors.email = 'Please enter a valid email address.';
  if (!subject) errors.subject = 'Please choose a subject.';
  if (message.trim().length < 10) errors.message = 'Please write a short message (at least 10 characters).';
  return errors;
};

const composeMessage = ({ name, email, subject, message }) =>
  `Hello Bai Khata Kalam,\n\n${message.trim()}\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject}`;

// There is no server inbox yet, so the message is handed to WhatsApp or the visitor's email app,
// already filled in. Nothing the visitor types is lost.
const ContactForm = () => {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sentVia, setSentVia] = useState(null);

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const send = (channel) => {
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`contact-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    const text = composeMessage(values);
    const url = channel === 'whatsapp'
      ? whatsappLink(text)
      : `mailto:${org.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(text)}`;
    window.open(url, channel === 'whatsapp' ? '_blank' : '_self', 'noopener');
    setSentVia(channel);
  };

  const field = (name, label, input) => (
    <div className={styles.field}>
      <label htmlFor={`contact-${name}`}>{label}</label>
      {input}
      {errors[name] && <p id={`contact-${name}-error`} className={styles.error} role="alert">{errors[name]}</p>}
    </div>
  );

  const aria = (name) => ({
    id: `contact-${name}`,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  });

  return (
    <Reveal variants={slideFromRight} className={styles.formCard}>
      <div className={styles.formHeader}>
        <MessageSquare aria-hidden="true" />
        <h2>Send us a Message</h2>
      </div>

      <AnimatePresence mode="wait">
        {sentVia ? (
          <motion.div key="done" className={styles.sent} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <CheckCircle2 size={56} aria-hidden="true" />
            <h3>Almost there!</h3>
            <p>
              We&rsquo;ve opened {sentVia === 'whatsapp' ? 'WhatsApp' : 'your email app'} with your message filled in.
              Just press send and we&rsquo;ll reply as soon as we can.
            </p>
            <button type="button" className={styles.linkButton} onClick={() => setSentVia(null)}>Edit or send another message</button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={(event) => { event.preventDefault(); send('whatsapp'); }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {field('name', 'Full Name', <input type="text" autoComplete="name" value={values.name} onChange={update('name')} {...aria('name')} />)}
            {field('email', 'Email Address', <input type="email" autoComplete="email" value={values.email} onChange={update('email')} {...aria('email')} />)}
            {field('subject', 'Subject', (
              <select value={values.subject} onChange={update('subject')} {...aria('subject')}>
                <option value="">Select a subject</option>
                {SUBJECTS.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
              </select>
            ))}
            {field('message', 'Message', <textarea rows={5} value={values.message} onChange={update('message')} placeholder="How can we help you?" {...aria('message')} />)}

            <div className={styles.formActions}>
              <Button type="submit" block icon={<Send size={18} aria-hidden="true" />}>Send via WhatsApp</Button>
              <Button variant="outline" block onClick={() => send('email')} icon={<Mail size={18} aria-hidden="true" />}>Send by Email</Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </Reveal>
  );
};

export default ContactForm;
