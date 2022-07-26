import React from 'react';

const Plans = () => {
  return (
    <div className="w-60 h-20 primary-color h6-thin rounded-md shadow-sm shadow-black hover:bg-gray-800 cursor-pointer mb-6">
      <div className="flex w-full h-full justify-start ">
        <div className="w-[30%] h-ful flex justify-center items-center">
          <div className="w-[80%] h-[50%] bg-white m-4 rounded-full"></div>
        </div>
        <div className="mx-1 flex justify-center items-center">
          <div className="h6-thin">future plans</div>
        </div>
        <div className="flex justify-end items-center ml-8">{'>'}</div>
      </div>
    </div>
  );
};

export default Plans;
