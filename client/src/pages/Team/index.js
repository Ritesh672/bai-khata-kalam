import React from 'react';
import PageMeta from '../../components/layout/PageMeta';
import TeamHero from './TeamHero';
import Philosophy from './Philosophy';
import TeamGrid from './TeamGrid';
import JoinCTA from './JoinCTA';

const Team = () => (
  <>
    <PageMeta page="team" />
    <TeamHero />
    <Philosophy />
    <TeamGrid />
    <JoinCTA />
  </>
);

export default Team;
