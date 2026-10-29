import React from 'react';
import PageMeta from '../../components/layout/PageMeta';
import AboutHero from './AboutHero';
import Certifications from './Certifications';
import MissionVision from './MissionVision';
import FounderMessage from './FounderMessage';
import JourneyTimeline from './JourneyTimeline';
import TrustValues from './TrustValues';

// Certifications come straight after the hero, so visitors see our legal standing first.
const About = () => (
  <>
    <PageMeta
      title="About Bai Khata Kalam | NGO in Bishalgarh, Tripura"
      description="Learn about Bai Khata Kalam, a registered NGO in Bishalgarh, Tripura: our mission, vision, founder, journey and legal registration."
      path="/about"
    />
    <AboutHero />
    <Certifications />
    <MissionVision />
    <FounderMessage />
    <JourneyTimeline />
    <TrustValues />
  </>
);

export default About;
