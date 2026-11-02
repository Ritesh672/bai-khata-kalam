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
    <PageMeta page="home" />
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
