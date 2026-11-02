import React from 'react';
import PageMeta from '../../components/layout/PageMeta';
import AboutSchool from './AboutSchool';
import AtAGlance from './AtAGlance';
import Collaboration from './Collaboration';
import DayAtSchool from './DayAtSchool';
import Mission from './Mission';
import Outcomes from './Outcomes';
import Fees from './Fees';
import SupportSchool from './SupportSchool';

const schoolJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'School',
  '@id': 'https://www.baikhatakalam.com/vidyasagar-vidyapith#school',
  name: 'Vidyasagar Vidyapith English Medium School',
  alternateName: 'Vidyasagar Vidyapith (Eng.) Medium',
  foundingDate: '2024',
  telephone: ['+919436362026', '+918119982977'],
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
      description="Vidyasagar Vidyapith, an English-medium school in Ambagan, Bishalgarh, Tripura recognised by the Govt. of Tripura: our mission, yearly fees, admissions and how to support the school."
      path="/vidyasagar-vidyapith"
      jsonLd={schoolJsonLd}
    />
    <AboutSchool />
    <AtAGlance />
    <Mission />
    <Collaboration />
    <DayAtSchool />
    <Outcomes />
    <Fees />
    <SupportSchool />
  </>
);

export default VidyasagarVidyapith;
