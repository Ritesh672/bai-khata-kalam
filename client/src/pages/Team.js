import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, BookOpen, Users, Heart, Target } from 'lucide-react';
import './Team.css';

const Team = () => {
  const team = [
    { name: 'Bidhan Das', role: 'Principal & Founder', bio: 'Visionary leader with a passion for Montessori-based education systems.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Sonali Majumder', role: 'Senior Teacher', bio: 'Dedicated educator focused on child psychology and primary learning.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
    { name: 'Nandita Sarkar', role: 'Educator', bio: 'Expert in creative teaching methods and student engagement.', image: 'https://images.unsplash.com/photo-1580894732234-83e9e3ec5997?auto=format&fit=crop&q=80&w=400' },
    { name: 'Rupali Saha', role: 'Educator', bio: 'Passionate about foundational literacy and numeracy skills.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400' },
    { name: 'Minakshi Saha', role: 'Educator', bio: 'Specialist in Montessori tools and early childhood development.', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=400' },
    { name: 'Arpita Bhowmik', role: 'Educator', bio: 'Focuses on holistic development and extracurricular activities.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' },
    { name: 'Nabanita Majumder', role: 'Educator', bio: 'Experienced in community outreach and student welfare.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
  ];

  const philosophy = [
    {
      title: 'Montessori Method',
      desc: 'Our teachers use child-centered approaches that encourage exploration and natural curiosity.',
      icon: <Target size={24} />
    },
    {
      title: 'Holistic Care',
      desc: 'Beyond academics, we focus on the emotional and social well-being of every student.',
      icon: <Heart size={24} />
    },
    {
      title: 'Local Mentorship',
      desc: 'Being part of the community, our educators provide tailored support to rural families.',
      icon: <Users size={24} />
    }
  ];

  return (
    <div className="team-page">
      <Helmet>
        <title>Our Team | The Hearts Behind the Mission | Bai Khata Kalam</title>
        <meta name="description" content="Meet the dedicated team of educators and volunteers at Bai Khata Kalam NGO working tirelessly for the future of underprivileged children." />
      </Helmet>
      <section className="team-hero hero">
        <div className="container text-center">
          <span className="badge">Our Educators</span>
          <h1>The Hearts Behind the Mission</h1>
          <p>Meet our dedicated team of educators working tirelessly to provide a better future for our students.</p>
        </div>
      </section>

      <section className="philosophy-section section surface">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Teaching Philosophy</h2>
            <p>How our educators empower the next generation of leaders in Tripura.</p>
          </div>
          <div className="philosophy-grid">
            {philosophy.map((item, idx) => (
              <motion.div 
                key={idx} 
                className={`impact-box-card impact-card-${idx}`}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="impact-icon-box">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-grid-section section">
        <div className="container">
          <div className="team-grid">
            {team.map((member, idx) => (
              <motion.div 
                key={idx} 
                className="team-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="social-overlay">
                    <a href="#"><Linkedin size={18} /></a>
                    <a href="#"><Twitter size={18} /></a>
                    <a href="#"><Mail size={18} /></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span className="role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="volunteer-cta section surface">
        <div className="container text-center">
          <h2>Want to join our team?</h2>
          <p>We are always looking for passionate volunteers and educators to join our cause.</p>
          <Link to="/contact" className="btn btn-primary">Become a Volunteer</Link>
        </div>
      </section>
    </div>
  );
};

export default Team;
