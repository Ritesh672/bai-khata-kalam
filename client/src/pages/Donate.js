import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CreditCard, Heart, Package, BookOpen, GraduationCap, ShieldCheck } from 'lucide-react';
import './Donate.css';

// Small thumbnails for trust booster
import regCert from '../assets/images/registration.jpeg';
import nashaCert from '../assets/images/nashamukt.jpeg';
import pledgeCert from '../assets/images/pledge.jpeg';

const Donate = () => {
  const [amount, setAmount] = useState('2000');
  const [donationType, setDonationType] = useState('monthly');
  const [isCorporate, setIsCorporate] = useState(false);

  const presets = ['500', '2000', '5000', '10000'];

  const impacts = [
    { icon: <Package />, amount: '₹500', text: 'Provides essential school supplies for one child.' },
    { icon: <BookOpen />, amount: '₹2000', text: 'Covers 1 month of tuition and learning materials.' },
    { icon: <GraduationCap />, amount: '₹5000', text: 'Supports a child for a full semester of education.' },
  ];

  return (
    <div className="donate-page">
      <Helmet>
        <title>Donate Now | Support Education in Tripura | Bai Khata Kalam</title>
        <meta name="description" content="Every contribution counts. Donate to Bai Khata Kalam NGO to support education, school supplies, and sustainable growth for rural children in India." />
      </Helmet>
      <div className="container">
        <div className="donate-header text-center">
          <span className="badge">Make an Impact</span>
          <h1>Invest in a Child's Future</h1>
          <p>Your contribution directly supports underprivileged children in Tripura.</p>
        </div>

        <div className="donate-grid">
          {/* Donation Form */}
          <div className="donate-form-card card">
            <div className="form-tabs">
              <button 
                className={donationType === 'one-time' ? 'active' : ''} 
                onClick={() => setDonationType('one-time')}
              >
                One-time
              </button>
              <button 
                className={donationType === 'monthly' ? 'active' : ''} 
                onClick={() => setDonationType('monthly')}
              >
                Monthly
              </button>
            </div>

            <div className="amount-selection">
              <label>Select Amount (₹)</label>
              <div className="preset-grid">
                {presets.map((p) => (
                  <button 
                    key={p} 
                    className={amount === p ? 'active' : ''} 
                    onClick={() => setAmount(p)}
                  >
                    ₹{p}
                  </button>
                ))}
              </div>
              <input 
                type="number" 
                placeholder="Custom Amount" 
                value={presets.includes(amount) ? '' : amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <form className="details-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" required />
              </div>

              <div className="checkbox-group">
                <input 
                  type="checkbox" 
                  id="corporate" 
                  checked={isCorporate}
                  onChange={() => setIsCorporate(!isCorporate)}
                />
                <label htmlFor="corporate">This is a corporate donation</label>
              </div>

              {isCorporate && (
                <motion.div 
                  className="corporate-fields"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" placeholder="Acme Corp" />
                  </div>
                  <div className="form-group">
                    <label>Business Email</label>
                    <input type="email" placeholder="csr@acme.com" />
                  </div>
                  <div className="checkbox-group">
                    <input type="checkbox" id="csr" />
                    <label htmlFor="csr">Interested in CSR partnership</label>
                  </div>
                </motion.div>
              )}

              <div className="form-group">
                <label>Message (Optional)</label>
                <textarea placeholder="Your message of hope..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Proceed to Secure Payment
              </button>
              <p className="payment-note text-center">
                <CreditCard size={14} /> Secured by industry standard encryption
              </p>
            </form>

            <div className="trust-booster">
              <h4>100% Verified & Government Registered NGO</h4>
              <div className="trust-badges-row">
                <img src={regCert} alt="Reg" title="NGO Registration" />
                <img src={nashaCert} alt="Nasha Mukt" title="Nasha Mukt Bharat" />
                <img src={pledgeCert} alt="Pledge" title="Govt Pledge" />
              </div>
              <p>
                All donations are secure and legally compliant. 
                Tax benefits available under applicable laws.
              </p>
            </div>
          </div>

          {/* Impact Sidebar */}
          <div className="impact-sidebar">
            <h3>Your Impact Breakdown</h3>
            <div className="impact-cards">
              {impacts.map((item, idx) => (
                <div key={idx} className="impact-item card">
                  <div className="impact-icon">{item.icon}</div>
                  <div className="impact-text">
                    <h4>{item.amount}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="trust-badge card">
              <Heart fill="currentColor" />
              <div>
                <h4>Trust & Transparency</h4>
                <p>100% of your donation goes directly to educational programs and student welfare.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
