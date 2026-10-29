import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Step from './Step';
import styles from './Donate.module.css';

const Field = ({ id, label, children }) => (
  <div className={styles.field}>
    <label htmlFor={id} className={styles.label}>{label}</label>
    {children}
  </div>
);

const DonorDetails = ({ form, setField }) => {
  const bind = (field) => ({
    id: `donor-${field}`,
    className: styles.input,
    value: form[field],
    onChange: (event) => setField(field, event.target.value),
  });

  return (
    <Step number={2} title="Your details">
      <div className={styles.row}>
        <Field id="donor-name" label="Full Name">
          <input type="text" autoComplete="name" required placeholder="John Doe" {...bind('name')} />
        </Field>
        <Field id="donor-email" label="Email Address">
          <input type="email" autoComplete="email" required placeholder="john@example.com" {...bind('email')} />
        </Field>
      </div>
      <Field id="donor-phone" label="Phone Number">
        <input type="tel" autoComplete="tel" required placeholder="+91 98765 43210" {...bind('phone')} />
      </Field>

      <label className={styles.checkbox}>
        <input type="checkbox" checked={form.isCorporate} onChange={() => setField('isCorporate', !form.isCorporate)} />
        <span>This is a corporate donation</span>
      </label>

      <AnimatePresence initial={false}>
        {form.isCorporate && (
          <motion.div
            className={styles.corporate}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className={styles.row}>
              <Field id="donor-companyName" label="Company Name">
                <input type="text" placeholder="Acme Corp" {...bind('companyName')} />
              </Field>
              <Field id="donor-businessEmail" label="Business Email">
                <input type="email" placeholder="csr@acme.com" {...bind('businessEmail')} />
              </Field>
            </div>
            <label className={styles.checkbox}>
              <input type="checkbox" checked={form.isCsr} onChange={() => setField('isCsr', !form.isCsr)} />
              <span>Interested in CSR partnership</span>
            </label>
          </motion.div>
        )}
      </AnimatePresence>

      <Field id="donor-message" label="Message (Optional)">
        <textarea rows={3} placeholder="Your message of hope..." {...bind('message')} />
      </Field>
    </Step>
  );
};

export default DonorDetails;
