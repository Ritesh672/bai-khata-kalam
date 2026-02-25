import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Users, Heart, School, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

import pledgeCert from '../assets/images/pledge.jpeg';

const Home = () => {
  const stats = [
    { label: 'Funds Raised', value: '₹1.2L+', icon: <Users size={24} /> },
    { label: 'Books Distributed', value: '35k+', icon: <School size={24} /> },
    { label: 'Children Educated', value: '500+', icon: <Heart size={24} /> },
    { label: 'Learning Hours', value: '10,000+', icon: <BookOpen size={24} /> },
  ];

  const steps = [
    { title: 'Identify', desc: 'We find children who lack access to basic education.', icon: '01' },
    { title: 'Enroll', desc: 'Secure admission in partner schools with full support.', icon: '02' },
    { title: 'Empower', desc: 'Provide continuous mentorship and learning resources.', icon: '03' },
  ];
  const events = [
    {
      title: 'Annual Sports Meet 2026',
      date: 'Feb 28, 2026',
      location: 'Bishalgarh Stadium',
      desc: 'Our students across all levels participate in a day of athletics and team-building exercises.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Montessori Teaching Workshop',
      date: 'March 15, 2026',
      location: 'NGO Headquarters',
      desc: 'A training session for our teachers to refine Montessori methodologies for Class 1-5.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Book Distribution Drive',
      date: 'April 05, 2026',
      location: 'Remote Tribal Village',
      desc: 'Distributing new sets of books and uniforms to children in underprivileged tribal areas.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    }
  ];

  const impactItems = [
    {
      title: 'Montessori Method',
      desc: 'Implementing child-centered educational approaches that foster natural interests rather than formal teaching methods.',
      icon: <Users size={24} />
    },
    {
      title: 'Sustainable Support',
      desc: 'Providing not just one-time help, but long-term educational resources, uniforms, and books for every student.',
      icon: <BookOpen size={24} />
    },
    {
      title: 'Local Empowerment',
      desc: 'Focusing specifically on the unique challenges faced by the underprivileged tribal and rural communities of Tripura.',
      icon: <Heart size={24} />
    },
  ];

  const cardColors = ['#f97316', '#22c55e', '#3b82f6', '#8b5cf6'];

  return (
    <div className="home-page">
      <Helmet>
        <title>Bai Khata Kalam | Government Registered NGO in India</title>
        <meta name="description" content="Bai Khata Kalam is a government-registered NGO in India working towards education, community upliftment, and social impact. Support our mission and donate today." />
      </Helmet>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">Education for All</span>
            <h1>Every Child Deserves <span className="text-orange">Quality Education</span></h1>
            <p>Empowering underprivileged children in Tripura by providing access to Montessori-based learning and sustainable educational support.</p>
            <div className="hero-btns">
              <Link to="/donate" className="btn btn-primary">Donate Now</Link>
              <Link to="/contact" className="btn btn-outline">Partner With Us</Link>
            </div>
          </motion.div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="impact-card">
              <Heart className="heart-icon" fill="currentColor" />
              <div>
                <h5>37+ Students</h5>
                <p>Learning for free</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                style={{ 
                  backgroundColor: cardColors[index], 
                  color: 'white',
                  border: 'none'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>{stat.icon}</div>
                <h3 style={{ color: 'white' }}>{stat.value}</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Direct Impact */}
      <section className="direct-impact section surface">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="impact-title">Our Direct Impact</h2>
            <p className="impact-subtitle">Small steps lead to great journeys. Here's how we are changing lives on the ground in Tripura.</p>
          </div>
          <div className="impact-grid">
            {impactItems.map((item, index) => (
              <motion.div 
                key={index} 
                className={`impact-box-card impact-card-${index}`}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="impact-icon-box">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="video-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="impact-title">See Our Work in Action</h2>
            <p className="impact-subtitle text-center">Watch how your support is transforming lives through education.</p>
          </div>
          
          <motion.div 
            className="video-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="video-wrapper">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/FRRPwUQqYJ8" 
                title="NGO Impact Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          <div className="text-center mt-4">
            <Link to="/donate" className="btn btn-orange">Support Our Mission</Link>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="events-section section">
        <div className="container">
          <div className="section-header flex justify-between items-center">
            <div>
              <span className="badge">Upcoming Events</span>
              <h2>Events That Make a Difference</h2>
            </div>
          </div>
          <div className="events-grid">
            {events.map((event, index) => (
              <motion.div 
                key={index} 
                className="event-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-info">
                  <h4>{event.title}</h4>
                  <div className="event-meta">
                    <div className="event-meta-item">
                      <Calendar size={16} /> <span>{event.date}</span>
                    </div>
                    <div className="event-meta-item">
                      <MapPin size={16} /> <span>{event.location}</span>
                    </div>
                  </div>
                  <p>{event.desc}</p>
                  <Link to="/contact" className="btn-link">View Details <ArrowRight size={18} /></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to change a child's life?</h2>
            <p>Your small contribution can provide a lifetime of opportunities. Join us in our mission to educate Tripura's future.</p>
            <div className="cta-btns">
              <Link to="/donate" className="btn btn-secondary">Join the Mission</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
