import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us | Get in Touch | Bai Khata Kalam</title>
        <meta name="description" content="Have questions or want to volunteer? Contact Bai Khata Kalam NGO. Reach out to us via local offices in Tripura or through our online form." />
      </Helmet>
      <section className="contact-hero hero">
        <div className="container text-center">
          <span className="badge">Get in Touch</span>
          <h1>We'd Love to Hear From You</h1>
          <p>Whether you want to volunteer, partner, or just say hello, our doors are always open.</p>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-card card">
                <h3>Contact Information</h3>
                <p>Reach out to us through any of these channels.</p>
                <div className="info-list">
                  <div className="info-item">
                    <div className="icon-circle"><MapPin /></div>
                    <div>
                      <h4>Our Address</h4>
                      <p>Bai Khata Kalam, Bishalgarh, Tripura Sepahijala, PIN 799102</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon-circle"><Phone /></div>
                    <div>
                      <h4>Phone Number</h4>
                      <p>+91 9436362026</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon-circle"><Mail /></div>
                    <div>
                      <h4>Email Address</h4>
                      <p>info@baikhatakalam.org</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="map-placeholder card">
                <div className="map-ui">
                  <MapPin size={40} color="var(--primary)" />
                  <p>Tripura, India</p>
                  <span>(Interactive Map Placeholder)</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form card">
              <div className="form-header">
                <MessageSquare className="text-primary" />
                <h3>Send us a Message</h3>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select required>
                    <option value="">Select a subject</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="partner">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-blue w-full">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-preview section surface">
        <div className="container text-center">
          <h2>Have more questions?</h2>
          <p>Check our FAQ page or reach out to us directly via WhatsApp.</p>
          <a href="https://wa.me/919436362026" className="btn btn-secondary mt-2">
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
