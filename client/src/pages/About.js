import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Heart, Target, Eye, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import './About.css';

// Import Certificates
import regCert from '../assets/images/registration.jpeg';
import nashaCert from '../assets/images/nashamukt.jpeg';
import pledgeCert from '../assets/images/pledge.jpeg';
import childMarriagePledge from '../assets/images/childmarriage.jpeg';
import tbMuktPledge from '../assets/images/tbmukt_pledge_certificate.jpeg';


const About = () => {
  const timeline = [
    { year: '2023', title: 'The Vision', desc: 'Bidhan Das envisioned a Tripura where every child has access to quality education regardless of their financial background.' },
    { year: '2024', title: 'First Steps', desc: 'Started with a small group of students in Bishalgarh, providing free education.' },
    { year: '2025', title: 'Montessori Integration', desc: 'Fully implemented the Montessori-based education system for students up to Class 5.' },
    { year: '2026', title: 'Growing Impact', desc: 'Currently supporting 37+ students and a dedicated team of 7 teachers.' },
  ];

  return (
    <div className="about-page">
      <Helmet>
        <title>About Us | Bai Khata Kalam NGO</title>
        <meta name="description" content="Learn about Bai Khata Kalam NGO, our mission, vision, and the impact we create in communities across India." />
      </Helmet>
      <section className="about-hero hero">
        <div className="container">
          <div className="about-hero-content text-center">
            <span className="badge">Our Foundation</span>
            <h1>Rooted in Hope, Driven by Purpose</h1>
            <p>Bai Khata Kalam is a non-profit organization dedicated to transforming the lives of underprivileged children through revolutionary education.</p>
          </div>
        </div>
      </section>

      <section className="mission-vision section card-section">
        <div className="container">
          <div className="grid grid-2">
            <div className="mission-card card">
              <div className="impact-icon-box"><Target size={24} /></div>
              <h3>Our Mission</h3>
              <p>To eliminate educational inequality by providing free, high-quality, Montessori-based education to children from poor families in Tripura.</p>
            </div>
            <div className="vision-card card">
              <div className="impact-icon-box"><Eye size={24} /></div>
              <h3>Our Vision</h3>
              <p>A society where every child, irrespective of their socio-economic status, has the opportunity to learn, grow, and lead.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-section section surface">
        <div className="container founder-grid">
          <div className="founder-image">
            <img src="https://images.unsplash.com/photo-1544161515-4ae6b904656c?auto=format&fit=crop&q=80&w=800" alt="Bidhan Das - Founder" />
          </div>
          <div className="founder-text">
            <span className="badge">Founder's Message</span>
            <h2>"Education is the most powerful weapon"</h2>
            <p className="quote">
              "We believe that a child's background should not determine their future. At Bai Khata Kalam, we are not just teaching subjects; we are building characters and providing the tools for a better tomorrow."
            </p>
            <div className="founder-info">
              <h4>Bidhan Das</h4>
              <p>Principal & Founder, Bai Khata Kalam</p>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Journey So Far</h2>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content card">
                  <span className="year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="certifications-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Legal Compliance</span>
            <h2>Our Certifications & Legal Status</h2>
            <p className="section-subtitle">We are a legally registered non-profit organization compliant with Government of India regulations.</p>
          </div>
          
          <div className="certs-grid">
            <div className="cert-card card cert-card-0">
              <div className="cert-image">
                <img src={regCert} alt="NGO Registration Certificate" />
                <div className="cert-overlay">
                  <a href={regCert} target="_blank" rel="noopener noreferrer" className="view-btn">
                    <ExternalLink size={20} /> View Certificate
                  </a>
                </div>
              </div>
              <div className="cert-info">
                <h4>Registration Certificate</h4>
                <p>Official registration under the Societies Registration Act, verifying our legal status as an NGO.</p>
              </div>
            </div>

            <div className="cert-card card cert-card-1">
              <div className="cert-image">
                <img src={nashaCert} alt="Nasha Mukt Bharat Abhiyaan" />
                <div className="cert-overlay">
                  <a href={nashaCert} target="_blank" rel="noopener noreferrer" className="view-btn">
                    <ExternalLink size={20} /> View Certificate
                  </a>
                </div>
              </div>
              <div className="cert-info">
                <h4>Nasha Mukt Bharat</h4>
                <p>Recognized participant in the Government's Nasha Mukt Bharat Abhiyaan for a drug-free India.</p>
              </div>
            </div>

            <div className="cert-card card cert-card-2">
              <div className="cert-image">
                <img src={pledgeCert} alt="Government Pledge Certificate" />
                <div className="cert-overlay">
                  <a href={pledgeCert} target="_blank" rel="noopener noreferrer" className="view-btn">
                    <ExternalLink size={20} /> View Certificate
                  </a>
                </div>
              </div>
              <div className="cert-info">
                <h4>Official Pledge</h4>
                <p>Certificate representing our commitment to national service and government-led initiatives.</p>
              </div>
            </div>


            <div className="cert-card card cert-card-3">
              <div className="cert-image">
                <img src={childMarriagePledge} alt="Child Marriage Pledge" />
                <div className="cert-overlay">
                  <a href={childMarriagePledge} target="_blank" rel="noopener noreferrer" className="view-btn">
                    <ExternalLink size={20} /> View Certificate
                  </a>
                </div>
              </div>
              <div className="cert-info">
                <h4>Anti-Child Marriage Pledge</h4>
                <p>Formal commitment to eradicate child marriage and protect child rights in our communities.</p>
              </div>
            </div>

            <div className="cert-card card cert-card-4">
              <div className="cert-image">
                <img src={tbMuktPledge} alt="TB Mukt Bharat Pledge" />
                <div className="cert-overlay">
                  <a href={tbMuktPledge} target="_blank" rel="noopener noreferrer" className="view-btn">
                    <ExternalLink size={20} /> View Certificate
                  </a>
                </div>
              </div>
              <div className="cert-info">
                <h4>TB Mukt Bharat</h4>
                <p>Official pledge certificate for supporting the National TB Elimination Program.</p>
              </div>
            </div>

          </div>

          <div className="trust-statement text-center">
            <ShieldCheck size={24} className="text-primary" />
            <p>We are a legally registered non-profit organization compliant with Government of India regulations.</p>
          </div>
        </div>
      </section>

      <section className="trust-badges section surface">
        <div className="container">
          <div className="grid trust-grid">
            <div className="trust-card card">
              <div className="impact-icon-box"><Award size={24} /></div>
              <h4>Fully Transparent</h4>
              <p>Real-time tracking of impact and detailed reporting on every donation received.</p>
            </div>
            <div className="trust-card card">
              <div className="impact-icon-box"><Heart size={24} /></div>
              <h4>Community Led</h4>
              <p>Driven by passionate local volunteers who understand the unique needs of our children.</p>
            </div>
            <div className="trust-card card">
              <div className="impact-icon-box"><Target size={24} /></div>
              <h4>Results Focused</h4>
              <p>Measurable student progress monitored through continuous assessments and support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
