// Facts about the organisation, taken from its registration documents.
export const org = {
  name: 'Bai Khata Kalam',
  tagline: 'Empowering underprivileged children in Tripura through quality education and Montessori-based learning systems.',
  founder: 'Bidhan Das',
  founderRole: 'Principal & Founder, Bai Khata Kalam',
  address: 'Ambagan, P.O. Bishalgarh, Sepahijala, Tripura 799102',
  shortAddress: 'Bishalgarh, Tripura',
  phone: '+91 94363 62026',
  phoneHref: 'tel:+919436362026',
  whatsappHref: 'https://wa.me/919436362026',
  email: 'bidhandas143@gmail.com',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Ambagan%2C+Bishalgarh%2C+Tripura+799102',
  registrationNo: '9481 of 2024',
  registeredOn: '27 May 2024',
  darpanId: 'TR/2025/0713069',
  pan: 'AANAB6225G',
  twelveAUrn: 'AANAB6225GE20251',
  udyam: 'UDYAM-TR-05-0009634',
  twelveAPdf: '/docs/form-10ac-12a-provisional-registration.pdf',
};

export const whatsappLink = (text) => `${org.whatsappHref}?text=${encodeURIComponent(text)}`;
