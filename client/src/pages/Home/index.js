import React from 'react';
import PageMeta from '../../components/layout/PageMeta';
import HeroSection from './HeroSection';
import TrustSection from './TrustSection';
import StatsSection from './StatsSection';
import DirectImpactSection from './DirectImpactSection';
import VideoSection from './VideoSection';
import EventsSection from './EventsSection';
import CTASection from './CTASection';

const Home = () => (
  <>
    <PageMeta
      title="Bai Khata Kalam | Education NGO in Bishalgarh, Tripura"
      description="Bai Khata Kalam is a registered NGO in Bishalgarh, Tripura, giving underprivileged children quality, Montessori-based education. Support our school."
      path="/"
    />
    <HeroSection />
    <TrustSection />
    <StatsSection />
    <DirectImpactSection />
    <VideoSection />
    <EventsSection />
    <CTASection />
  </>
);

export default Home;
