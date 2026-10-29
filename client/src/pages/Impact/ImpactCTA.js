import React from 'react';
import Button from '../../components/ui/Button';
import CTABanner from '../../components/sections/CTABanner';

const ImpactCTA = () => (
  <CTABanner
    headingId="impact-cta"
    title="Help us write next year's story"
    text="Every child we reach starts with a book, a notebook and a pen. Your support makes the next milestone possible."
  >
    <Button to="/donate" size="lg">Donate Now</Button>
    <Button to="/about" variant="outline" size="lg">Our Journey</Button>
  </CTABanner>
);

export default ImpactCTA;
