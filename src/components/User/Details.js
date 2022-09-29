import React from 'react';
import { EditProfile } from '../Common/Buttons/EditProfile';
import ProfileImage from '../../Image/Profile/2.png';
import { DefaultButton } from '../Common/Buttons/DefaultButton';
import { InstagramIcon } from '../Common/svg/icon';

const Details = () => {
  return (
    <div className=" flex justify-center items-center flex-col h6-thin">
      <div className="rounded-full  w-60 h-60 border-[1px] border-black bg-gray-900 mt-10">
        <img src={ProfileImage} className="w-full h-full" />
      </div>
      <div className="w-full mt-2 flex justify-start items-start flex-col">
        <div>Username</div>
        <div className="flex">
          <div className="pr-2">First Name</div>
          <div>Last name</div>
        </div>
        <div className="h6-thin">Interested in: </div>
        <EditProfile title="Edit profile" />
        <div className="mt-2 flex justify-start items-start flex-col">
          <div className="body-2 my-2"> Link to other accounts</div>
          <div className="body-2 cursor-pointer flex items-center my-2 border-[1px]">
            <div className="mx-2 flex justify-center items-center">
              <div className="w-6 h-6">
                <InstagramIcon />{' '}
              </div>
              <div className="mx-2">Instgram</div>
            </div>
            <div>
              <input
                className="w-full bg-transparent border-l-[1px] py-2 h-8 rounded-sm text-start px-2 outline-none"
                placeholder="@username"
              ></input>
            </div>
          </div>
          <div className="w-full">
            <DefaultButton title="Add social links" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
