import React, { useState } from 'react';
import PropType from 'prop-types';
import { EditProfile } from '../Common/Buttons/EditProfile';
import ProfileImage from '../../Image/Profile/2.png';
import { DefaultButton } from '../Common/Buttons/DefaultButton';
import { EmailIcon } from '../Common/svg/icon';
import EditUserProfile from '../Common/modals/user/EditUserProfile';

const Details = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=" flex justify-center items-center flex-col h6-thin">
      <div className="rounded-full hidden md:flex h-12 w-12 md:w-60 md:h-60 border-[1px] border-black bg-gray-900 mt-10">
        <img src={ProfileImage} className="w-full h-full" />
      </div>
      <div className="w-full mt-2 flex justify-start items-start flex-col">
        <div className="flex justify-center items-center">
          <div className="rounded-full flex md:hidden  w-20 h-full justify-start items-start md:w-60 md:h-60 border-[2px] border-black bg-gray-900 mt-0 md:mt-10">
            <img src={ProfileImage} className="w-full h-full" />
          </div>

          <div className="flex flex-col justify-start items-start mx-2">
            <div className="h-full w-full h6-sm-thin font-bold">
              {user ? user?.username : 'username'}
            </div>
            <div className="flex">
              <div className="pr-2 caption">
                {user?.firstName ? user?.firstName : 'FirstName'}
              </div>
              <div className="caption">
                {user?.lastName ? user?.lastName : 'LastName'}
              </div>
            </div>
          </div>
        </div>

        <div className="h6-thin">Interested in: </div>
        <EditProfile title="Edit profile" action={() => setIsModalOpen(true)} />
        <div className="mt-2 flex justify-start items-start flex-col w-full">
          <div className="body-2 my-2">Link to other accounts</div>
          <div className="w-full body-2 cursor-pointer flex items-center my-2 border-[1px]">
            <div className="mx-2 flex justify-center items-center ">
              <div className="w-6 h-6">
                <EmailIcon />
              </div>
              <div className="mx-2">Email</div>
            </div>
            <div className="w-full">
              <input
                className="w-full bg-transparent border-l-[1px] py-2 h-8 rounded-sm text-start px-2 outline-none"
                placeholder={`${user?.email}`}
                disabled={true}
              ></input>
            </div>
          </div>
          <div className="w-full text-white">
            <DefaultButton title="Add social links" />
          </div>
        </div>
      </div>

      <EditUserProfile
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Details;
Details.propTypes = {
  user: PropType.object,
};
