import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollProgress from './components/layout/ScrollProgress';
import PageTransition from './components/layout/PageTransition';
import Home from './pages/Home';

// Every page except Home is downloaded only when visited.
const VidyasagarVidyapith = lazy(() => import('./pages/VidyasagarVidyapith'));
const About = lazy(() => import('./pages/About'));
const Impact = lazy(() => import('./pages/Impact'));
const Team = lazy(() => import('./pages/Team'));
const Contact = lazy(() => import('./pages/Contact'));
const Donate = lazy(() => import('./pages/Donate'));
const DonationSuccess = lazy(() => import('./pages/DonationSuccess'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader = () => <div style={{ minHeight: '100vh' }} aria-busy="true" />;

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={location.pathname}>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/vidyasagar-vidyapith" element={<VidyasagarVidyapith />} />
            <Route path="/about" element={<About />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/donation-success" element={<DonationSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </PageTransition>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      {/* Respects the visitor's "reduce motion" setting across every animation. */}
      <MotionConfig reducedMotion="user">
        <a href="#main" className="skip-link">Skip to main content</a>
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        <main id="main" tabIndex={-1}>
          <AnimatedRoutes />
        </main>
        <Footer />
      </MotionConfig>
    </Router>
  );
}

export default App;
