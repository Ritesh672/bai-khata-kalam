import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageMeta from '../../components/layout/PageMeta';
import useDonation from '../../hooks/useDonation';
import useRazorpayScript from '../../hooks/useRazorpayScript';
import DonateHeader from './DonateHeader';
import AmountPicker from './AmountPicker';
import DonorDetails from './DonorDetails';
import PaySection from './PaySection';
import DonationSummary from './DonationSummary';
import ImpactBreakdown from './ImpactBreakdown';
import TrustPanel from './TrustPanel';
import styles from './Donate.module.css';

const initialForm = {
  amount: '2000',
  name: '',
  email: '',
  phone: '',
  message: '',
  isCorporate: false,
  companyName: '',
  businessEmail: '',
  isCsr: false,
};

// Links like /donate?amount=500 pre-select an amount (whole rupees only).
const amountFromUrl = (params) => {
  const value = params.get('amount');
  return value && /^[1-9]\d{0,6}$/.test(value) ? value : null;
};

const Donate = () => {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(() => ({ ...initialForm, amount: amountFromUrl(searchParams) || initialForm.amount }));
  const { pay, isProcessing } = useDonation();
  useRazorpayScript();

  const setField = (field, value) => setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    pay(form);
  };

  return (
    <div className={styles.page}>
      <PageMeta
        title="Donate for Child Education in Tripura | Bai Khata Kalam"
        description="Donate online to Bai Khata Kalam to support books, school supplies and quality education for underprivileged children in Bishalgarh, Tripura."
        path="/donate"
      />
      <DonateHeader />
      <div className={`container ${styles.layout}`}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <AmountPicker amount={form.amount} onChange={(value) => setField('amount', value)} />
          <DonorDetails form={form} setField={setField} />
          <PaySection amount={form.amount} isProcessing={isProcessing} />
        </form>
        <aside className={styles.aside}>
          <DonationSummary form={form} />
          <ImpactBreakdown amount={form.amount} />
          <TrustPanel />
        </aside>
      </div>
    </div>
  );
};

export default Donate;
