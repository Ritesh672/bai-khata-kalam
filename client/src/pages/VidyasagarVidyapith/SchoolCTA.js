import React from 'react';
import { Heart } from 'lucide-react';
import Button from '../../components/ui/Button';
import CTABanner from '../../components/sections/CTABanner';

const SchoolCTA = () => (
  <CTABanner
    headingId="school-cta"
    icon={<Heart size={44} aria-hidden="true" />}
    title="Be a Part of Their Journey"
    text="Your support can help us expand our reach and provide quality education to more students at Vidyasagar Vidyapith."
  >
    <Button to="/donate" size="lg">Donate Now</Button>
    <Button to="/contact" variant="outline" size="lg">Become a Volunteer</Button>
  </CTABanner>
);

export default SchoolCTA;
