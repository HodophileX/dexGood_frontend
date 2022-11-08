import React from 'react';
import Line1 from '../../Image/landingPage/line1.png';
import Line2 from '../../Image/landingPage/Line2.png';
const Features = () => {
  return (
    <section className="relative flex justify-center items-center my-20 flex-col">
      <div className="h-full flex sm:flex-row-reverse flex-col md:justify-center items-center">
        <img
          src={Line1}
          draggable={false}
          className="absolute md:bottom-0 md:right-0 blur-2xl"
        />
        <img
          src={Line2}
          draggable={false}
          className="absolute scale-50 md:top-0 md:left-0 blur-2xl rotate-180 "
        />
        <div className="text-justify">
          <div className="h2-thin h3-sm font-bold mb-10  text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
            Why Plexus?
          </div>
          <div className=" h6-sm-thin h6-thin  my-4 text-justify md:px-60 px-2">
            We assist you in bringing a meaningful smile on your face". How do
            you do that? By engaging in prosocial behavior or doing a good deed!
            Plexus act's as your personal good deeds repository that stores your
            data perennially and we also provide some other services that
            inflates your happiness.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
