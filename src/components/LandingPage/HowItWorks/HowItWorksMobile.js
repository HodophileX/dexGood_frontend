import React, { useState } from 'react';
import { PROCESS } from '../../../constant/processStep';
import HeaderImage from '../../../Image/landingPage/bg-header.jpg';
const HowItWorksMobile = () => {
  const step = PROCESS.length;
  const [stepSelected, setStepSelection] = useState(0);
  return (
    <div className="mx-2 h-[60vh] mb-10">
      <img src={HeaderImage} className="absolute h-[50%] blur-2xl right-40" />
      <div className="w-full flex flex-col justify-start p-2 dashboard rounded-md bg-gradient-to-r from-indigo-900 to-transparent h-full">
        <div className="flex h4-sm-thin justify-center">How it works?</div>
        <div className="flex justify-center py-4">
          {[...Array(step)].fill(0).map((value, i) => (
            <div
              className={`h-8 w-8 rounded-full  ${
                stepSelected === i
                  ? 'bg-white text-black'
                  : 'bg-black text-white'
              } text-center mx-2 justify-center items-center `}
              onClick={() => {
                setStepSelection(i);
              }}
              key={i}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="flex flex-col my-2 px-4 pb-20">
          <div className="flex h4-sm my-2 font-bold">
            {PROCESS[stepSelected].title}
          </div>
          <div className="flex h6-sm-thin text-justify">
            {PROCESS[stepSelected].process}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksMobile;
