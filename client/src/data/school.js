// Vidyasagar Vidyapith facts, from the school's own banner, mission poster and fee notice (2026).
import logo from '../assets/images/school/school-logo.webp';
import banner from '../assets/images/school/school-banner.webp';
import missionPoster from '../assets/images/school/mission-poster.webp';
import feesPoster from '../assets/images/school/fees-poster.webp';
import bankPoster from '../assets/images/school/bank-details.webp';

export const school = {
  name: 'Vidyasagar Vidyapith (Eng.) Medium',
  established: '2024',
  recognition: 'Recognised by the Govt. of Tripura',
  motto: 'Knowledge is love and light and vision',
};

export const schoolImages = {
  logo: { src: logo, alt: 'Vidyasagar Vidyapith school logo, established 2024', width: 360, height: 360 },
  banner: {
    src: banner,
    alt: 'Vidyasagar Vidyapith (Eng.) Medium signboard: recognised by the Govt. of Tripura, run with Bai Khata Kalam NGO, Ambagan, Bishalgarh',
    width: 1600,
    height: 421,
  },
  missionPoster: {
    src: missionPoster,
    alt: 'Our Mission poster: Every child can learn, speak, think and lead',
    width: 716,
    height: 478,
  },
  feesPoster: { src: feesPoster, alt: 'Vidyasagar Vidyapith yearly fees structure notice', width: 1024, height: 1536 },
  bankPoster: { src: bankPoster, alt: 'Bai Khata Kalam bank account details poster', width: 900, height: 1125 },
};

export const mission = {
  quote: ['Every Child Can Learn,', 'Every Child Can Speak,', 'Every Child Can Think,', 'Every Child Can Lead.'],
  pillars: [
    { title: 'Strong foundations', text: 'Reading, writing and numbers taught step by step, so every child truly understands the basics.', icon: 'book', tone: 'butter' },
    { title: 'Confident communication', text: 'Daily chances to speak, read aloud and share ideas in front of the class.', icon: 'chat', tone: 'mint' },
    { title: 'Creative thinking', text: 'Hands-on Montessori activities, art and questions that let curiosity lead.', icon: 'idea', tone: 'rose' },
    { title: 'Good character', text: 'Kindness, honesty and respect, learned through everyday school life and celebrations.', icon: 'trophy', tone: 'sky' },
  ],
};

// Yearly fee structure as published by the school.
export const fees = [
  { title: 'Monthly fees', note: 'Every month', amount: 200, icon: 'calendar', tone: 'sky' },
  { title: 'Examination fees', note: 'Per exam', amount: 50, icon: 'exam', tone: 'mint' },
  { title: 'Independence Day rally', note: '15 August', amount: 100, icon: 'flag', tone: 'peach' },
  { title: 'Saraswati Puja & Milad programme', note: 'Once a year', amount: 150, icon: 'music', tone: 'lilac' },
  { title: 'Birthday of Vidyasagar', note: '26 September', amount: 50, icon: 'cake', tone: 'rose' },
];

// Direct bank transfer to Bai Khata Kalam, as given on the NGO's bank details poster.
export const bank = {
  accountName: 'Bai Khata Kalam',
  accountNumber: '2190102100000680',
  ifsc: 'PUNB0219010',
  bankName: 'Punjab National Bank',
};
