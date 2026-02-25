import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span>Bai Khata Kalam</span>
          </Link>
          <p className="footer-desc">
            Empowering underprivileged children in Tripura through quality education and Montessori-based learning systems.
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><Facebook size={20} /></a>
            <a href="#" className="social-link"><Instagram size={20} /></a>
            <a href="#" className="social-link"><Twitter size={20} /></a>
          </div>
          <div className="small-trust-badges">
            <div className="trust-item">
              <ShieldCheck size={14} /> <span>Govt. Registered NGO</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={14} /> <span>CSR Eligible</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={14} /> <span>Tax Benefit (80G)</span>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/impact">Our Impact</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><MapPin size={18} /> Bishalgarh, Tripura Sepahijala, PIN 799102</li>
            <li><Phone size={18} /> +91 9436362026</li>
            <li><Mail size={18} /> info@baikhatakalam.org</li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to get updates on our impact and stories.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" required />
            <button type="submit" className="btn btn-primary btn-blue">Join</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Bai Khata Kalam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
