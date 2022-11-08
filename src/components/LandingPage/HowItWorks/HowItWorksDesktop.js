import React from 'react';
import HeaderImage from '../../../Image/landingPage/bg-header.jpg';
import DogFeeling from '../../../Image/landingPage/dogFeeding.png';
import Globe from '../../../Image/landingPage/globe.png';
import Showcase from '../../../Image/landingPage/showcase.png';
import Invite2 from '../../../Image/landingPage/Invite2.png';

const HowItWorksDesktop = () => {
  return (
    <section className="sm:mx-0 md:my-8 md:mx-80 sm:px-2 h-full ">
      <div className="h-full w-full flex flex-col justify-center pb-10 items-center">
        <div className="h2-thin h2-sm-thin font-bold mb-10  text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
          How it works?
        </div>
        <div className="w-full flex justify-center items-end relative">
          <div className="text-justify md:w-90 sm:w-auto">
            <div className=" my-4 px-4 flex justify-start items-center flex-row relative md:w-[65vw] p-2">
              <img
                src={HeaderImage}
                className="absolute h-[50%] blur-2xl right-40"
              />
              <div className="z-10 flex flex-col md:flex-row justify-start items-center w-full dashboard rounded-md bg-gradient-to-r from-indigo-500 hover:scale-[102%] ease-in transition-300">
                <div className="relative">
                  <h1 className="lg:text-[20rem] text-[13rem] lg:leading-[24rem] leading-[12rem] text-center mx-8 text-transparent bg-clip-text bg-gradient-to-b to-purple-700 from-pink-600 border-b-2 border-black">
                    1
                  </h1>
                </div>
                <div className="w-80 ">
                  <h4 className=" font-boldtext-[#FEE6C1] mb-5">
                    Be the change
                  </h4>
                  <div className="text-start h6-thin h6-thin-sm text-gray-900">
                    <span className="text-orange-600">Empathize</span> and do a
                    good deed! Store your past or current deeds in the
                    repository. Fill out the verification form. Avail the
                    service free of charge.
                  </div>
                </div>
                <img
                  src={DogFeeling}
                  className="md:absolute top-0 scale-75 right-0 rounded-lg -z-10 "
                />
              </div>
            </div>
            <div className="absolute w-[20%] h-80 bg-purple-700 right-0 blur-3xl rounded-full"></div>
            <div className="relative text-justify my-4 px-4 flex justify-start items-center p-2 hover:scale-[102%] ease-in transition-300">
              <div className="z-10 flex flex-col md:flex-row justify-start items-center dashboard rounded-md bg-gradient-to-r from-indigo-500 w-full">
                <h1 className="lg:text-[18rem] text-[9rem] lg:leading-[24rem] leading-[12rem] text-center mx-8 text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-blue-600 border-b-2 border-black">
                  2
                </h1>
                <div className="text-start w-80">
                  <h4 className=" font-bold mb-5 ">Go Public</h4>
                  <div className="text-start h6-thin text-gray-900">
                    After the maturity stage you will have an option to make
                    your repository{' '}
                    <span className="text-orange-600">impersonal</span>, so as
                    to inspire millions in doing a good deed. Choose to go
                    public among your Contact, Community, City, State, Country
                    or the world.
                  </div>
                </div>
                <img
                  src={Globe}
                  className="md:absolute -top-10 right-0 -z-10 "
                />
              </div>
            </div>
            <div className="relative text-justify my-4 px-4 flex justify-start items-center p-2 hover:scale-[102%] ease-in transition-300">
              <div className="z-10 flex flex-col md:flex-row justify-start items-center dashboard rounded-md bg-gradient-to-r from-indigo-500 w-full">
                <h1 className="lg:text-[18rem] text-[9rem] lg:leading-[24rem] leading-[12rem] text-center mx-8 text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-pink-600 border-b-2 border-black">
                  3
                </h1>
                <div className=" w-80 ">
                  <h4 className=" font-boldtext-[#FEE6C1] mb-5">Invite</h4>
                  <div className=" text-start h6-thin h6-thin-sm text-gray-900">
                    You can post a request on the feed that requires{' '}
                    <span className="text-orange-600">team work</span> in
                    furtherance of a good deed! If accepted, work by
                    collaborating with others.
                  </div>
                </div>
                <img
                  src={Invite2}
                  className="md:absolute -bottom-10 -right-20 scale-75 -z-10 "
                />
              </div>
            </div>
            <div className="relative text-justify my-4 px-4 flex justify-start items-center p-2 hover:scale-[102%] ease-in transition-300">
              <div className="z-10 flex flex-col md:flex-row justify-start items-center dashboard rounded-md bg-gradient-to-r from-indigo-500 w-full">
                <h1 className="lg:text-[18rem] text-[9rem] lg:leading-[24rem] leading-[12rem] text-center mx-8 text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-blue-600 border-b-2 border-black">
                  4
                </h1>
                <div className="w-60 text-start">
                  <h4 className=" font-boldtext-[#FEE6C1] mb-5">Showcase</h4>
                  <div className="text-start h6-thin body-sm-1 text-gray-900">
                    After going public{' '}
                    <span className="text-orange-600">display</span> your plexus
                    repository ID on your resume/CV as a memento of your{' '}
                    <span className="text-orange-600">character</span>, and add
                    on to your value.
                  </div>
                </div>
                <img
                  src={Showcase}
                  className="md:absolute -bottom-30 right-0 scale-75 -z-10 "
                />
              </div>
            </div>
            <div className="relative text-justify my-4 px-4 flex justify-start items-center   p-2 hover:scale-[102%] ease-in transition-300">
              <div className="z-10 flex flex-col md:flex-row justify-start items-center dashboard rounded-md bg-gradient-to-r from-indigo-500 w-full">
                <h1 className="lg:text-[18rem] text-[9rem] lg:leading-[24rem] leading-[12rem] text-center mx-8 text-transparent bg-clip-text bg-gradient-to-b from-pink-600 to-blue-600 border-b-2 border-black">
                  5
                </h1>
                <div className="w-60 text-start">
                  <h4 className=" font-boldtext-[#FEE6C1] mb-5">Raise funds</h4>
                  <div className="text-start h6-thin body-sm-1 text-gray-900">
                    In furtherance if any good deed
                    <span className="text-orange-600">raise or donate</span>
                    funds
                  </div>
                </div>
                <img
                  src={Showcase}
                  className="md:absolute -bottom-30 right-0 scale-75 -z-10 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksDesktop;
