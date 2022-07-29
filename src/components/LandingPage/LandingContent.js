import React from 'react';
import Features from './Features';
import HowItWorks from './HowItWorks';
import IntroSection from './IntroSection';

const LandingContent = () => {
  return (
    <div className="bg-color">
      <IntroSection />
      <Features />
      <HowItWorks />
    </div>
  );
};

export default LandingContent;
