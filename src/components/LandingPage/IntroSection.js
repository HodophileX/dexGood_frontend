import React from 'react';
import HeaderImage from './gradienta.jpg';

const IntroSection = () => {
  return (
    <div className="w-full flex flex-col mt-72">
      <div className="relative mt-0 flex justify-center items-center">
        <div className="absolute w-full h-[90vh] flex justify-center items-center">
          <img
            src={HeaderImage}
            alt="background image"
            className="absolute bg-black object-fill w-[40%] h-[40%] blur-3xl"
          />
        </div>
      </div>
      <div className=" h-full z-10 flex justify-center items-center ">
        <div className="md:w-[100vw] h-full  flex flex-col justify-center items-center">
          <div className="lg:w-[42vw] flex justify-center items-center h2-thin h4-sm-thin md:w-[8vw] font-bold">
            Rendezvous with your sainted-self
          </div>
          <div className="md:w-[42vw] flex justify-center items-center h4-thin h5-sm-thin sm:w-40 font-bold text-purple-700 ">
            A driving force for the good in the world
          </div>
        </div>
      </div>
      <div className="mt-4 p-2 w-full flex justify-center items-center">
        <div className="bg-pink-700 p-[1px] rounded-lg cursor-pointer">
          <div className="bg-gradient-to-r from-indigo-500 px-4 py-2 rounded-lg h6-thin ">
            Join now
          </div>{' '}
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
