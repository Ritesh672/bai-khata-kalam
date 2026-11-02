import React from 'react';
import PageMeta from '../../components/layout/PageMeta';
import ImpactHero from './ImpactHero';
import NumbersSection from './NumbersSection';
import GallerySection from './GallerySection';
import SuccessModels from './SuccessModels';
import ImpactCTA from './ImpactCTA';

const Impact = () => (
  <>
    <PageMeta page="impact" />
    <ImpactHero />
    <NumbersSection />
    <GallerySection />
    <SuccessModels />
    <ImpactCTA />
  </>
);

export default Impact;
