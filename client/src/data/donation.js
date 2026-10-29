// Donation amounts and what each level helps provide.
export const presets = ['500', '2000', '5000', '10000'];

export const impactTiers = [
  { min: 500, amount: '₹500', title: 'School supplies', text: 'Helps provide essential school supplies for one child.', icon: 'package' },
  { min: 2000, amount: '₹2,000', title: 'A month of learning', text: 'Helps cover a month of tuition and learning materials for one child.', icon: 'book' },
  { min: 5000, amount: '₹5,000', title: 'A full term', text: 'Helps support a child’s education for a full term.', icon: 'graduation' },
];

// The highest tier the amount reaches (or null below ₹500).
export const tierFor = (amount) => {
  const value = Number(amount) || 0;
  return [...impactTiers].reverse().find((tier) => value >= tier.min) || null;
};
