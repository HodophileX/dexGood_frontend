import React from 'react';
import HeaderImage from './bg-header.jpg';
const HowItWorks = () => {
  return (
    <section className="sm:mx-0 md:my-8 md:mx-80 sm:px-2 h-full">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="h2-thin">How it works?</div>

        <div className="w-full flex justify-start items-end ">
          <div className="text-start md:w-90 sm:w-auto">
            <div className="text-start my-4 px-4 flex justify-start items-center relative md:w-[65vw] p-2">
              <img
                src={HeaderImage}
                className="absolute h-[50%] blur-2xl right-40"
              />
              <div className="z-10 flex justify-start items-center w-full dashboard rounded-md bg-gradient-to-r from-indigo-500">
                <h1 className="lg:text-[18rem] text-[9rem] lg:leading-[24rem] leading-[12rem] text-center mx-8 text-gray-600">
                  1
                </h1>
                <div className="w-60 ">
                  <h4 className=" font-boldtext-[#FEE6C1] mb-5">
                    Be the change
                  </h4>
                  <div className="body-1 body-1-sm text-gray-500">
                    <span className="text-orange-600">Empathize</span> and do a
                    good deed! Store your past or current deeds in the
                    repository.
                    <br /> Fill out the verification form.
                    <br /> Avail the service free of charge.
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[20%] h-80 bg-purple-700 right-0 blur-3xl rounded-full"></div>
            <div className="relative text-start my-4 px-4 flex justify-start items-center p-2">
              <div className="z-10 flex justify-start items-center dashboard rounded-md bg-gradient-to-r from-indigo-500 w-full">
                <h1 className="lg:text-[18rem] text-[9rem] lg:leading-[24rem] leading-[12rem] text-center mx-8 text-gray-600">
                  2
                </h1>
                <div className="w-60">
                  <h4 className=" font-bold mb-5 ">Go Public</h4>
                  <div className="body-1 text-gray-700">
                    After the maturity stage you will have an option to make
                    your repository{' '}
                    <span className="text-orange-600">impersonal</span>, so as
                    to inspire billions in doing a good deed. Choose to go
                    public among your Contact, Community, City, State, Country
                    or the world.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-start my-4 px-4 flex justify-start items-center   p-2">
              <div className="z-10 flex justify-start items-center dashboard rounded-md bg-gradient-to-r from-indigo-500 w-full">
                <h1 className="lg:text-[18rem] text-[9rem] lg:leading-[24rem] leading-[12rem] text-center mx-8 text-gray-600">
                  3
                </h1>
                <div className="w-60 ">
                  <h4 className=" font-boldtext-[#FEE6C1] mb-5">Invite</h4>
                  <div className="body-1 body-1-sm text-gray-500">
                    You can post a request on the feed that requires{' '}
                    <span className="text-orange-600">team work</span> in
                    furtherance of a good deed! If accepted, work by
                    collaborating.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-start my-4 px-4 flex justify-start items-center   p-2">
              <div className="z-10 flex justify-start items-center dashboard rounded-md bg-gradient-to-r from-indigo-500 w-full">
                <h1 className="lg:text-[18rem] text-[9rem] lg:leading-[24rem] leading-[12rem] text-center mx-8 text-gray-600">
                  4
                </h1>
                <div className="w-60 ">
                  <h4 className=" font-boldtext-[#FEE6C1] mb-5">Showcase</h4>
                  <div className="body-1 body-sm-1 text-gray-500">
                    After going public{' '}
                    <span className="text-orange-600">display</span> your
                    Dexrepo ID on your resume/CV as a memento of your{' '}
                    <span className="text-orange-600">character</span>.
                    Corporate world is in search of such beings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
