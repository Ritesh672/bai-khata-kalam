// Team members as listed by the NGO.
// `photo`: the real, consented photo. Put the file in src/assets/images/team/, import it here and set it.
// `placeholder`: a free Unsplash stock portrait of a model (NOT our staff), only so the hero circle shows
// how the page will look with photos. Remove the placeholders before the site goes live.

const portrait = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&crop=faces&w=240&h=240&q=70`;
export const team = [
  {
    name: 'Bidhan Das',
    role: 'Principal & Founder',
    bio: 'Started Bai Khata Kalam to bring quality, Montessori-based education to children in and around Bishalgarh.',
    tone: 'blue',
    photo: null,
    placeholder: portrait('1670110531916-41045e83cb0a'),
  },
  {
    name: 'Sonali Majumder',
    role: 'Senior Teacher',
    bio: 'Focuses on child psychology and building strong foundations in the primary years.',
    tone: 'orange',
    photo: null,
    placeholder: portrait('1774437777953-0599439dad1c'),
  },
  {
    name: 'Nandita Sarkar',
    role: 'Educator',
    bio: 'Brings creative teaching methods that keep young learners engaged.',
    tone: 'green',
    photo: null,
    placeholder: portrait('1770838447151-05a876cdee3d'),
  },
  {
    name: 'Rupali Saha',
    role: 'Educator',
    bio: 'Passionate about foundational literacy and numeracy.',
    tone: 'purple',
    photo: null,
    placeholder: portrait('1528082414335-adbd64f18d12'),
  },
  {
    name: 'Minakshi Saha',
    role: 'Educator',
    bio: 'Works with Montessori learning materials and early childhood development.',
    tone: 'blue',
    photo: null,
    placeholder: portrait('1706943262459-3ef6ce03305c'),
  },
  {
    name: 'Arpita Bhowmik',
    role: 'Educator',
    bio: 'Leads holistic development and activities beyond the classroom.',
    tone: 'orange',
    photo: null,
    placeholder: portrait('1597897569252-9df44c7de0db'),
  },
  {
    name: 'Nabanita Majumder',
    role: 'Educator',
    bio: 'Connects with families through community outreach and student welfare.',
    tone: 'green',
    photo: null,
    placeholder: portrait('1617009762269-c062aaf6b3a0'),
  },
];

export const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
