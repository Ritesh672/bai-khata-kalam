import React from 'react';
import PageMeta from '../../components/layout/PageMeta';
import TeamHero from './TeamHero';
import Philosophy from './Philosophy';
import TeamGrid from './TeamGrid';
import JoinCTA from './JoinCTA';

const Team = () => (
  <>
    <PageMeta
      title="Our Team | Teachers & Founder | Bai Khata Kalam, Tripura"
      description="Meet the founder and teachers of Bai Khata Kalam and Vidyasagar Vidyapith in Bishalgarh, Tripura, working for the future of underprivileged children."
      path="/team"
    />
    <TeamHero />
    <Philosophy />
    <TeamGrid />
    <JoinCTA />
  </>
);

export default Team;
