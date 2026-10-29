// Team members as listed by the NGO. Shown as monograms until real, consented photos are available.
export const team = [
  {
    name: 'Bidhan Das',
    role: 'Principal & Founder',
    bio: 'Started Bai Khata Kalam to bring quality, Montessori-based education to children in and around Bishalgarh.',
    tone: 'blue',
  },
  {
    name: 'Sonali Majumder',
    role: 'Senior Teacher',
    bio: 'Focuses on child psychology and building strong foundations in the primary years.',
    tone: 'orange',
  },
  {
    name: 'Nandita Sarkar',
    role: 'Educator',
    bio: 'Brings creative teaching methods that keep young learners engaged.',
    tone: 'green',
  },
  {
    name: 'Rupali Saha',
    role: 'Educator',
    bio: 'Passionate about foundational literacy and numeracy.',
    tone: 'purple',
  },
  {
    name: 'Minakshi Saha',
    role: 'Educator',
    bio: 'Works with Montessori learning materials and early childhood development.',
    tone: 'blue',
  },
  {
    name: 'Arpita Bhowmik',
    role: 'Educator',
    bio: 'Leads holistic development and activities beyond the classroom.',
    tone: 'orange',
  },
  {
    name: 'Nabanita Majumder',
    role: 'Educator',
    bio: 'Connects with families through community outreach and student welfare.',
    tone: 'green',
  },
];

export const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
