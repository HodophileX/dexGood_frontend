import React from 'react';
import { EditProfile } from '../Common/Buttons/EditProfile';

const Details = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className="rounded-full  w-60 h-60 border-[1px] border-black bg-slate-600 -mt-8"></div>
      <div className="w-full mt-2 flex justify-start items-start flex-col">
        <div>Username</div>
        <div className="flex">
          <div className="pr-2">First Name</div>
          <div>Last name</div>
        </div>
        <div>About</div>
        <EditProfile title="Edit profile" />
        <div className="mt-2 flex justify-start items-start flex-col">
          <div className="body-2 my-2 "> Link to other accounts</div>
          <div className="body-2 cursor-pointer"> Twitter</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
