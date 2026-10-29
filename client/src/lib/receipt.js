// Generates the downloadable PDF receipt shown on the success page (unchanged from the original page).
export const downloadReceipt = async ({ paymentId, amount, name, email, date }) => {
  const { jsPDF } = await import('jspdf');
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
