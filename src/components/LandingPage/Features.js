import React from 'react';
import GroupPeep from './Group3.png';
import Line1 from './line1.png';
import Line2 from './Line2.png';
const Features = () => {
  return (
    <section className="md:h-[80vh] relative flex justify-center items-center my-24 flex-col">
      <div className="h-full flex sm:flex-row-reverse flex-col md:justify-center items-center">
        <div>
          <img
            src={GroupPeep}
            className="md:absolute md:scale-50 md:-bottom-40 md:left-40"
          />
        </div>
        <img
          src={Line1}
          className="absolute scale-50 md:bottom-0 md:right-0 blur-2xl"
        />
        <img
          src={Line2}
          className="absolute scale-50 md:top-0 md:left-0 blur-2xl rotate-180"
        />
        <div className="p-10 md:w-96 md:ml-60 text-justify">
          <div className="h2-thin h4-sm-thin font-bold mb-10  text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
            Why Dexrepo?
          </div>
          <div className="body-1 body-1-sm font-bold  my-4 text-justify">
            We are a <span className="text-orange-700">Non-Profit</span>.
            <br />
            Dexrepo will be your personal good deeds repository that will Store
            your data perennially. Dexrepo also provide you an option to go
            public.
          </div>
          <div className="body-1 body-sm-2 font-bold my-4">
            Each deed will be a souvenir whose authenticity could not be
            questioned as the platform utilizes various bands of verification.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
