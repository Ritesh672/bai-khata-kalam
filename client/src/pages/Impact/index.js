import React from 'react';
import PageMeta from '../../components/layout/PageMeta';
import ImpactHero from './ImpactHero';
import NumbersSection from './NumbersSection';
import GallerySection from './GallerySection';
import SuccessModels from './SuccessModels';
import ImpactCTA from './ImpactCTA';

const Impact = () => (
  <>
    <PageMeta
      title="Our Impact | Education in Tripura | Bai Khata Kalam"
      description="See how Bai Khata Kalam supports underprivileged children in Tripura with Montessori-based education, books and community programmes."
      path="/impact"
    />
    <ImpactHero />
    <NumbersSection />
    <GallerySection />
    <SuccessModels />
    <ImpactCTA />
  </>
);

export default Impact;
