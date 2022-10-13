import React from 'react';
import Features from './Features';
import HowItWorksDesktop from './HowItWorks/HowItWorksDesktop';
import HowItWorksMobile from './HowItWorks/HowItWorksMobile';
import IntroSection from './IntroSection';

const LandingContent = () => {
  return (
    <div className="h-min-screen">
      <IntroSection />
      <Features />
      <div className="hidden md:flex w-full justify-center">
        <HowItWorksDesktop />
      </div>
      <div className="flex md:hidden">
        <HowItWorksMobile />
      </div>
    </div>
  );
};

export default LandingContent;
