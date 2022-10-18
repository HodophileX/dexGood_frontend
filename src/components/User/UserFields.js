import React from 'react';
import { TbPrescription } from 'react-icons/tb';

const UserFields = () => {
  return (
    <div className="hidden md:grid grid-cols-2 gap-1 justify-center items-center">
      <div className="flex justify-center items-start mx-auto">
        <div className="px-2 border-b-[3px] border-orange-500 py-2 cursor-pointer">
          Repository
        </div>
      </div>
    </div>
  );
};

export default UserFields;
