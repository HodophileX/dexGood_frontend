import React from 'react';
import CalendarModal from '../components/Common/CalendarModal';
import Plans from '../components/Common/Plans';
import PostsContent from '../components/Posts/PostsContent';

const button = ['Text', 'Video', 'photo'];
const Main = () => {
  return (
    <section className="relative h3-thin flex flex-col justify-center">
      <div className="w-full h-60 bg-purple-300 absolute top-0 bg-gradient-to-r from-indigo-700"></div>
      <div className="z-10 mx-20">
        <div className="mt-6 flex justify-start items-center mx-20 px-14 wrap ">
          {button.map((val, index) => {
            return (
              <div
                className="w-40 h-14 p-4 bg-indigo-500 rounded-md flex justify-center items-center ml-6 cursor-pointer"
                key={index}
              >
                <div className="body-1 text-center">{val}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-14 flex justify-evenly mx-20 ">
          <div className=" flex flex-col items-center">
            {[...Array(3)].map((a, index) => {
              return (
                <div className="w-[45vw] mb-10 " key={index}>
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

            <CalendarModal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
