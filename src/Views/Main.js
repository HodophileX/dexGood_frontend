import React from 'react';
// import CalendarModal from '../components/Common/CalendarModal';
// import Plans from '../components/Common/Plans';
import PostCreate from '../components/Posts/PostCreate';
import PostsContent from '../components/Posts/PostsContent';

const Main = () => {
  return (
    <div className="relative h3-thin flex flex-col justify-start min-h-screen bg-[#eef0f2]">
      <div className="z-10 mx-2 md:mx-20">
        <div className="mt-6 flex justify-start items-center mx-2 md:mx-20 md:px-14 wrap "></div>
        <div className="mt-6 flex justify-evenly mx-2 md:mx-20 ">
          <div className=" flex flex-col items-center">
            <div className="w-full mx:w-[30vw] mb-6">
              <PostCreate />
            </div>
            {[...Array(3)].map((a, index) => {
              return (
                <div className="w-full md:w-[30vw] mb-4" key={index}>
                  <div className="absolute h-36 w-1 left-10 top-20 "></div>
                  <PostsContent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
