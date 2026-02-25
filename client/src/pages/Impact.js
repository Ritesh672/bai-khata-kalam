import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Smile, Award, Users, School, Heart, BookOpen } from 'lucide-react';
import './Impact.css';

const Counter = ({ target, label, prefix = '' }) => {
  return (
    <div className="counter-item">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {prefix}{target}
      </motion.h2>
      <p>{label}</p>
    </div>
  );
};

const Impact = () => {
  const gallery = [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1544161515-4ae6b904656c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&q=80&w=800',
  ];

  const caseStudies = [
    {
      title: 'Montessori Excellence',
      category: 'Curriculum',
      desc: 'Our students are performing 40% better than average in foundational literacy and numeracy.',
      icon: <Award />
    },
    {
      title: 'Community Empowerment',
      category: 'Social',
      desc: 'We have engaged with 50+ families to emphasize the importance of girl-child education.',
      icon: <Smile />
    }
  ];

  const stats = [
    { icon: <Users size={24} />, value: '₹1.2L+', label: 'Funds Raised' },
    { icon: <School size={24} />, value: '35k+', label: 'Books Distributed' },
    { icon: <Heart size={24} />, value: '500+', label: 'Children Educated' },
    { icon: <BookOpen size={24} />, value: '10,000+', label: 'Learning Hours' }
  ];

  return (
    <div className="impact-page">
      <Helmet>
        <title>Our Impact | Measurable Results | Bai Khata Kalam</title>
        <meta name="description" content="Discover the measurable impact of Bai Khata Kalam NGO. From educating children to community support, see how we are changing lives in Tripura." />
      </Helmet>
      <section className="impact-hero hero">
        <div className="container text-center">
          <span className="badge">Our Results</span>
          <h1>Measurable Impact, Real Lives</h1>
          <p>We track every rupee and every hour spent to ensure maximum benefit for the children.</p>
        </div>
      </section>

      <section className="numbers-section section">
        <div className="container">
          <div className="counters-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`impact-box-card impact-card-${index}`}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="impact-icon-box">{stat.icon}</div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section section surface">
        <div className="container">
          <div className="section-header text-center">
            <h2>Visualizing Our Work</h2>
            <p>A glimpse into our daily activities and the joy of learning.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((img, idx) => (
              <motion.div 
                key={idx} 
                className="gallery-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <img src={img} alt={`Impact ${idx}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-studies section">
        <div className="container">
          <div className="section-header">
            <h2>Success Models</h2>
          </div>
          <div className="grid grid-2">
            {caseStudies.map((study, idx) => (
              <motion.div 
                key={idx} 
                className={`impact-box-card impact-card-${(idx + 2) % 4}`}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="impact-icon-box">{study.icon}</div>
                <div className="case-content">
                  <span className="case-category">{study.category}</span>
                  <h3>{study.title}</h3>
                  <p>{study.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section section surface">
        <div className="container text-center">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="quote">"Bai Khata Kalam has given my daughter a dream. Earlier we thought she would have to start working, but now she wants to be a doctor."</p>
            <div className="testifier">
              <div>
                <h5>Sunita Roy</h5>
                <p>Parent of Grade 2 Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
