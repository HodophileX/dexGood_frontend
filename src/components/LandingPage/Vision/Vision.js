import React from 'react';
import Victor from '../../../Image/design/viktor.jpg';
const Vision = () => {
  return (
    <div className="bg-black flex  items-center flex-col">
      <div className="flex h-[30vh] md:h-[40vh] w-full mx-2 md:w-[70%] justify-center items-center primary-color text-white rounded-b-[100%]">
        <div className="mt-2 h-full h2-thin h3-sm-thin  text-[#c6e1e6] flex justify-center items-center font-extrabold ">
          Our Vision
        </div>
      </div>
      <div className="h-auto flex justify-center items-center mt-16 text-[#c6e1e6]">
        <div className="h4-thin h5-sm-thin md:w-[70%] md:text-justify text-white px-4 py-10  z-1 text-justify ">
          We hope for a future where one day not a single problem of any
          sentient being in this universe will go unaddressed, where people will
          go off their limits to help anyone in need, where reality would cease
          to be terrible, where amidst this abundance people would chant and
          realise the sacred mantra of "Not me, not me! But you, but you!",
          Where ideal and real will become nothing but one, where we would quit
          to be humans and become a civilization of Übermensch.
        </div>
      </div>
      <div className=" text-black py-10 flex justify-center items-center mt-2">
        <div className="flex  md:w-[70%] md:flex-row flex-col-reverse">
          <div className="w-full px-4 md:mx-10 text-white h4-thin h5-sm-thin mt-10 text-justify">
            “Happiness cannot be pursued; it must ensue, and it only does so as
            the unintended side effect of one’s personal dedication to a cause
            greater than oneself or as the by-product of one’s surrender to a
            person other than oneself.”
            <br />
            <span className="w-full flex justify-end mt-2">
              -Psychologist Viktor Frankl
            </span>
          </div>
          <div className="w-full px-4 md:px-2 md:w-[50%] flex justify-center items-center">
            <img src={Victor} className="rounded-md " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
