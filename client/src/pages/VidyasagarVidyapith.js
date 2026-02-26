import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Users, Star, Heart, GraduationCap } from 'lucide-react';
import schoolImg from '../assets/images/vidyasagar_school.png';
import './VidyasagarVidyapith.css';

const VidyasagarVidyapith = () => {
  const collaborationItems = [
    {
      title: 'Educational Material Distribution',
      desc: 'We provide essential books, stationery, and learning tools to ensure students have everything they need for a successful academic year.',
      icon: <BookOpen />
    },
    {
      title: 'Student Development Programs',
      desc: 'Conducting regular workshops and activities focused on cognitive development, creativity, and public speaking.',
      icon: <Users />
    },
    {
      title: 'Community Awareness Initiatives',
      desc: 'Engaging with parents and local leaders to emphasize the long-term benefits of sustained education and girl-child empowerment.',
      icon: <Heart />
    },
    {
      title: 'Skill-building Workshops',
      desc: 'Introducing students to practical skills and vocational training to prepare them for future opportunities.',
      icon: <GraduationCap />
    }
  ];

  return (
    <div className="vidyasagar-page">
      <Helmet>
        <title>Vidyasagar Vidyapith | Collaborative Education | Bai Khata Kalam</title>
        <meta name="description" content="Discover the collaboration between Bai Khata Kalam and Vidyasagar Vidyapith to promote literacy, holistic development, and quality education in our community." />
      </Helmet>

      {/* Hero Section */}
      <section className="vidyasagar-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="badge">Partner School</span>
            <h1>Vidyasagar Vidyapith</h1>
            <p>Empowering Young Minds Through Education</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="vidyasagar-about section">
        <div className="container">
          <div className="grid grid-2 items-center">
            <div className="text-content">
              <span className="badge">About the School</span>
              <h2>Building Foundations for Success</h2>
              <p>
                Vidyasagar Vidyapith is a premier educational institution and a key collaborative partner of Bai Khata Kalam. 
                Together, we are dedicated to bridging the educational gap for children in our region. The school serves 
                as a lighthouse of knowledge, providing a structured environment where students can thrive both 
                academically and personally.
              </p>
              <p>
                Our partnership focuses on creating a holistic development model that combines traditional academic 
                excellence with modern Montessori-inspired learning techniques supported by Bai Khata Kalam's resources 
                and volunteers.
              </p>
            </div>
            <div className="image-content">
               <div className="about-image-box">
                  <img src={schoolImg} alt="Vidyasagar Vidyapith School Building" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="collaboration-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Our Collaboration</span>
            <h2>How We Work Together</h2>
            <p className="section-subtitle">A multi-faceted approach to improving educational outcomes.</p>
          </div>
          <div className="collaboration-grid">
            {collaborationItems.map((item, idx) => (
              <motion.div 
                key={idx}
                className="collaboration-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="impact-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="vidyasagar-impact section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Real Results</span>
            <h2>Measuring Our Success</h2>
          </div>
          <div className="impact-details">
            <div className="impact-item-box">
              <h4>Improved Student Engagement</h4>
              <p>We've observed a significant increase in daily attendance and active classroom participation through interactive learning sessions.</p>
            </div>
            <div className="impact-item-box" style={{ borderLeftColor: '#f97316' }}>
              <h4>Access to Better Resources</h4>
              <p>Every student at Vidyasagar Vidyapith now has access to high-quality textbooks and modern learning materials provided by Bai Khata Kalam.</p>
            </div>
            <div className="impact-item-box" style={{ borderLeftColor: '#3b82f6' }}>
              <h4>Stronger Community Involvement</h4>
              <p>Parent-teacher engagement has doubled, creating a stronger support system for children at home and in school.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section text-center">
        <div className="container">
          <Heart size={48} className="text-secondary mb-2" />
          <h2>Be a Part of Their Journey</h2>
          <p>Your support can help us expand our reach and provide quality education to more students at Vidyasagar Vidyapith.</p>
          <div className="cta-button-group">
            <a href="/donate" className="btn btn-primary btn-blue">Donate Now</a>
            <a href="/contact" className="btn btn-secondary">Become a Volunteer</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VidyasagarVidyapith;
