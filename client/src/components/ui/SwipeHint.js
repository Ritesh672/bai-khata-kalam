import React from 'react';
import { ArrowRight } from 'lucide-react';

// Shown under a `.mobile-swipe` row on phones only, so visitors know the cards scroll sideways.
const SwipeHint = () => (
  <p className="swipe-hint" aria-hidden="true">
    Swipe for more <ArrowRight size={14} />
  </p>
);

export default SwipeHint;
