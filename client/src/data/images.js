// Free-licence photos (Unsplash License: free for commercial use, no attribution required;
// we credit photographers anyway). These are REPRESENTATIVE images of classroom life in India.
// They do not show Bai Khata Kalam's own students, staff or school, and are always captioned that way.
import pressClipping from '../assets/images/anuual_sport.jpeg';

const unsplash = (id) => (width) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=70`;

const stock = (id, alt, credit, page) => ({ src: unsplash(id), alt, credit, page, representative: true });

export const images = {
  classroomTeacher: stock(
    '1709290749293-c6152a187b14',
    'Students in uniform at their desks while a teacher walks between the rows',
    'CIMT Hooghly',
    'https://unsplash.com/photos/I4lLt9g8i3k',
  ),
  classroomDesks: stock(
    '1719159381916-062fa9f435a6',
    'Children in school uniforms working at desks in a bright classroom',
    'Haseeb Modi',
    'https://unsplash.com/photos/OcDJhBm8Jnc',
  ),
  studentsListening: stock(
    '1573894999291-f440466112cc',
    'Schoolgirls in a crowded classroom listening attentively',
    'Yogendra Singh',
    'https://unsplash.com/photos/yR0QwMbMjT8',
  ),
  emptyClassroom: stock(
    '1719159381962-4170890ada4e',
    'A tidy classroom with wooden desks and a blackboard',
    'Haseeb Modi',
    'https://unsplash.com/photos/T921iC2fkJk',
  ),
  girlInUniform: stock(
    '1572847748080-bac263fae977',
    'A young girl in school uniform standing in front of her classmates',
    'Raj Rana',
    'https://unsplash.com/photos/nWpTGnP_jWE',
  ),
  blackboard: stock(
    '1654366677760-b1aaa51b9e02',
    'A simple classroom with a blackboard and wooden benches',
    'Nico Smit',
    'https://unsplash.com/photos/-n6lStvz1os',
  ),
  hillSchool: stock(
    '1765994898026-4fa84ade4a61',
    'A school building in the hills at golden hour, with children playing in the courtyard',
    'Ravi Sharma',
    'https://unsplash.com/photos/FtwOpIoxsvc',
  ),
  friends: stock(
    '1759143102544-790af882ff45',
    'Two schoolgirls in uniform chatting and smiling',
    'Sushanta Rokka',
    'https://unsplash.com/photos/aizNGa9MFik',
  ),
  girlWithBook: stock(
    '1777725770744-e66b802dbf60',
    'A girl holding her schoolbook in a green paddy field',
    'Ian Taylor',
    'https://unsplash.com/photos/U4bISHxD4TA',
  ),
  happyStudents: stock(
    '1524069290683-0457abfe42c3',
    'A cheerful group of school children in uniform waving at the camera',
    'Church of the King',
    'https://unsplash.com/photos/j9jZSqfH5YI',
  ),
  pressClipping: {
    src: () => pressClipping,
    alt: "Newspaper report headlined 'Young athletes shine at Vidyasagar Vidyapith Sports', February 2026",
    representative: false,
  },
};
