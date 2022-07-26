import React from 'react';
import Calender from '../components/Common/Calender';
import Plans from '../components/Common/Plans';
import PostsContent from '../components/Posts/PostsContent';

const Main = () => {
  return (
    <section className="h3-thin px-20 flex justify-center">
      <div className="mt-4 flex justify-evenly">
        <div className=" flex flex-col items-center">
          {[...Array(3)].map((a, index) => {
            return (
              <div className="w-[45vw] mb-6 relative" key={index}>
                <div className="absolute h-36 w-1 left-10 top-20 "></div>
                <PostsContent />
              </div>
            );
          })}

          <div className="w-[45vw] mb-6 relative">
            <div className="absolute h-36 w-1 primary-color left-10 top-20 rounded-sm">
              <div className="absolute h-4 w-1 primary-color top-40 rounded-sm"></div>
              <div className="absolute h-2 w-1 primary-color top-48 rounded-sm"></div>
            </div>
            <PostsContent />
          </div>
        </div>
        <div className="flex flex-col mx-2">
          <Plans />

          <Calender />
        </div>
      </div>
    </section>
  );
};

export default Main;
