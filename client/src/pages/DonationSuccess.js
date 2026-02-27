import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { CheckCircle, Download, Home, Mail, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './DonationSuccess.css';

const DonationSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  if (!state) {
    return (
      <div className="success-page invalid-access">
        <div className="container">
          <div className="card text-center error-card">
            <div className="error-icon">⚠️</div>
            <h1>Invalid Access</h1>
            <p>We couldn't find any donation details. If you just made a payment, please check your email for confirmation.</p>
            <Link to="/donate" className="btn btn-primary mt-4">
              <ArrowLeft size={18} /> Back to Donate
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { paymentId, amount, name, email, date } = state;

  const downloadReceipt = () => {
    const doc = new jsPDF();
    const margin = 20;
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(37, 99, 235); // Primary Blue
    doc.text('Bai Khata Kalam', margin, 30);
    
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text('Government Registered NGO', margin, 38);
    doc.line(margin, 45, 190, 45);

    // Title
    doc.setFontSize(18);
    doc.setTextColor(0);
    doc.text('Donation Receipt', margin, 60);

    // Details Grid-like structure
    doc.setFontSize(12);
    let y = 80;
    const lineHeight = 10;

    const details = [
      ['Receipt Date:', date],
      ['Payment ID:', paymentId],
      ['Donor Name:', name],
      ['Donor Email:', email],
      ['Donation Amount:', `INR ${amount}`],
    ];

    details.forEach(([label, value]) => {
      doc.setFont('helvetica', 'bold');
      doc.text(label, margin, y);
      doc.setFont('helvetica', 'normal');
      doc.text(String(value), margin + 50, y);
      y += lineHeight;
    });

    // Thank You Note
    y += 20;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'italic');
    doc.text('Thank you for your generous contribution!', margin, y);
    
    y += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Your support helps us provide quality education and resources to children in need.', margin, y);

    // Footer
    doc.line(margin, 250, 190, 250);
    doc.text('This is a computer-generated receipt.', margin, 260);
    doc.text('www.baikhatakalam.com', 150, 260);

    doc.save(`Receipt_BKK_${paymentId}.pdf`);
  };

  return (
    <div className="success-page">
      <Helmet>
        <title>Thank You for Your Donation | Bai Khata Kalam</title>
      </Helmet>
      
      <div className="container">
        <div className="success-card card">
          <div className="status-header text-center">
            <CheckCircle className="success-icon" size={64} />
            <h1>Thank You, {name.split(' ')[0]}!</h1>
            <p className="subtitle">Your donation has been successfully processed.</p>
          </div>

          <div className="receipt-container">
            <h3>Transaction Summary</h3>
            <div className="receipt-details">
              <div className="detail-row">
                <span>Payment ID</span>
                <strong>{paymentId}</strong>
              </div>
              <div className="detail-row">
                <span>Date & Time</span>
                <strong>{date}</strong>
              </div>
              <div className="detail-row">
                <span>Amount</span>
                <strong className="amount-text">₹{amount}</strong>
              </div>
              <div className="divider"></div>
              <div className="detail-row">
                <span>Donor Name</span>
                <strong>{name}</strong>
              </div>
              <div className="detail-row">
                <span>Email Address</span>
                <strong>{email}</strong>
              </div>
            </div>

            <div className="confirmation-notice">
              <Mail size={18} />
              <p>A confirmation email has been sent to your registered email address.</p>
            </div>
          </div>

          <div className="success-actions">
            <button onClick={downloadReceipt} className="btn btn-outline">
              <Download size={18} /> Download Receipt
            </button>
            <Link to="/" className="btn btn-primary">
              <Home size={18} /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSuccess;
