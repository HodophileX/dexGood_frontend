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
            <span className="text-slate-800">
              What keeps us happy as we go through life?
            </span>
            <br /> If now you were going to invest in your future best self,
            where would you put your time and energy. An obvious answer is to
            this for many of us would be by investing in ourselves. But you
            would be surprised to know that research has shown that while
            looking back pro social or action intended to benifit others give us
            more lasting satisfaction than the action done for ourself. This is
            a life transforming insight! Now picture the life choices that
            people make and how those choices workout for them. It is nearly
            impossible to picture it as there is no record, but what if after
            being mindful about this insight we could get glimpses of our entire
            life as it unfolds through time. Our memory is bound to fail us for
            every good deed or prosocial action that we initiate. So let us be
            the catalyst in the process of you witnessing the bliss of your own
            good deeds.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
