import React from 'react';
import PageMeta from '../../components/layout/PageMeta';
import SchoolHero from './SchoolHero';
import AboutSchool from './AboutSchool';
import AtAGlance from './AtAGlance';
import Collaboration from './Collaboration';
import DayAtSchool from './DayAtSchool';
import Outcomes from './Outcomes';
import SchoolCTA from './SchoolCTA';

const schoolJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'School',
  '@id': 'https://www.baikhatakalam.com/vidyasagar-vidyapith#school',
  name: 'Vidyasagar Vidyapith English Medium School',
  url: 'https://www.baikhatakalam.com/vidyasagar-vidyapith',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ambagan, P.O. Bishalgarh',
    addressLocality: 'Bishalgarh',
    addressRegion: 'Tripura',
    postalCode: '799102',
    addressCountry: 'IN',
  },
  parentOrganization: { '@id': 'https://www.baikhatakalam.com/#org' },
};

const VidyasagarVidyapith = () => (
  <>
    <PageMeta
      title="Vidyasagar Vidyapith, Bishalgarh, Tripura | Bai Khata Kalam"
      description="Vidyasagar Vidyapith in Ambagan, Bishalgarh, Tripura and its partnership with Bai Khata Kalam to provide quality education to underprivileged children."
      path="/vidyasagar-vidyapith"
      jsonLd={schoolJsonLd}
    />
    <SchoolHero />
    <AboutSchool />
    <AtAGlance />
    <Collaboration />
    <DayAtSchool />
    <Outcomes />
    <SchoolCTA />
  </>
);

export default VidyasagarVidyapith;
