import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderImage from '../../Image/landingPage/gradienta.jpg';
const IntroSection = () => {
  const navigate = useNavigate();
  const JoinNow = () => {
    navigate('/login');
  };
  return (
    <div className="w-full relative">
      <div className="flex flex-col pt-60 md:pt-72">
        <div className=" mt-0 flex justify-center items-center">
          <div className="absolute w-full top-0 h-[90vh] flex justify-center items-center z-10">
            <img
              src={HeaderImage}
              draggable={false}
              alt="background image"
              className="absolute  object-fill w-[40%] h-[40%] blur-3xl "
            />
          </div>
        </div>
        <div className=" h-full z-10 flex justify-center items-center ">
          <div className="md:w-[100vw] h-full  flex flex-col md:justify-center items-center">
            <div className="lg:w-[42vw] flex justify-center items-center h2-thin h4-sm-thin md:w-[8vw] font-bold">
              Rendezvous with your sainted-self
            </div>
            <div className="md:w-[48vw] flex justify-center items-center h4-thin h5-sm-thin sm:w-40 text-purple-700 font-bold mb-10  text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
              A Driving Force for Good in the World
            </div>
          </div>
        </div>
        <div className="mt-4 p-2 w-full flex justify-center items-center z-10">
          <div className="bg-pink-700 p-[1px] rounded-lg ">
            <div
              className="bg-gradient-to-r from-indigo-500 px-4 py-2 rounded-lg h6-thin cursor-pointer "
              onClick={JoinNow}
            >
              Join Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
