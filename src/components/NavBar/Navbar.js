import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginRoute, postRoute, userRoute, visionRoute } from '../../route';
import { userLogout } from '../../_redux/action/user';
import RewardModal from '../Common/modals/Rewards/RewardModal';
import { BagIconSvg, EditButton } from '../Common/svg/icon';

const Navbar = () => {
  const user = useSelector(state => state.user.user);
  const [rewardModal, setIsRewardModal] = useState(false);
  const [settingPanelOpen, setSettingPanelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(userLogout());
    setSettingPanelOpen(false);
    navigate(loginRoute());
  };

  useEffect(() => {
    setSettingPanelOpen(false);
  }, [window.location.href]);

  return (
    <div className="w-100 primary-color h-14 shadow-sm shadow-black flex items-center justify-center relative z-100">
      <div className="w-full f-full flex items-center justify-start text-white mx-2 md:mx-40 z-100">
        <div className="h-full w-full flex justify-start">
          <div className="h5-thin cursor-pointer font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
            <Link to={''} className="cursor-pointer h-full p-0">
              Plexus
            </Link>
          </div>
        </div>
        <div className="w-full h-14 hidden md:flex">
          <div className="w-full px-2 h7-thin  cursor-pointer flex justify-end h-full text-[#a3a3a3]">
            {user && (
              <div className=" h-full hover:text-white flex text-center justify-center items-center">
                <Link
                  to={postRoute()}
                  className="cursor-pointer h-full flex text-center justify-center items-center   px-6"
                >
                  Post
                </Link>
              </div>
            )}
            <div className="hover:text-white  h-full ">
              <Link
                to={visionRoute()}
                className="cursor-pointer h-full flex text-center justify-center items-center mx-6 px-6"
              >
                Vision
              </Link>
            </div>
            {!user ? (
              <div className=" h-full ">
                <Link
                  to={loginRoute()}
                  className="cursor-pointer h-full flex text-center justify-center items-center  mx-6 px-6"
                >
                  Login
                </Link>
              </div>
            ) : (
              <div className=" h-full relative">
                <div className="cursor-pointer h-full flex text-center justify-center items-center">
                  <div
                    className="w-12 h-12 bg-black mx-1 rounded-full flex justify-center items-center"
                    onClick={() => setSettingPanelOpen(!settingPanelOpen)}
                  >
                    <BagIconSvg />
                  </div>
                  <div
                    className={`absolute w-60 z-20 bg-black top-16 px-6 pb-2 rounded-md  topArrow ${
                      !settingPanelOpen && 'hidden'
                    } `}
                  >
                    <div className="border-b-[1px] border-white py-1 ">
                      <div className="w-full h-full hover:bg-[#ffffff10] rounded-md py-2 hover:text-white">
                        <Link to={'user'}>
                          {user ? user.username : 'Profile'}
                        </Link>
                      </div>
                    </div>

                    <div
                      className="border-b-[1px] border-white py-1 "
                      onClick={logout}
                    >
                      <div className="w-full h-full hover:bg-[#ffffff10] rounded-md py-2 hover:text-white">
                        Logout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-14 flex md:hidden justify-end z-100">
          <div className="w-full  h7-thin hover:text-white cursor-pointer flex justify-end h-full items-center">
            <div className="h-full ">
              <Link
                to={visionRoute()}
                className="cursor-pointer h-full flex text-center justify-center items-center  px-6"
              >
                Vision
              </Link>
            </div>
            {!user ? (
              <div className="mr-4 h-full flex justify-center items-center">
                <div
                  className="w-full h-full"
                  onClick={() => setSettingPanelOpen(!settingPanelOpen)}
                >
                  <BagIconSvg />
                </div>
                <div
                  className={`absolute w-full h-[90vh] md:w-60 dashboard top-16 left-0  md:left-0 z-10   ${
                    !settingPanelOpen && 'hidden'
                  } `}
                >
                  <div className="w-[90%] mx-6 h-auto shadow-lg shadow-black mt-2 md:w-60 primary-color rounded-lg z-100 ">
                    <div
                      className="w-full h6-thin h6-sm-thin hover:bg-[#ffffff10] py-2 border-b-[1px] border-white hover:text-white"
                      onClick={() => setSettingPanelOpen(!settingPanelOpen)}
                    >
                      <Link to={loginRoute()}>login</Link>
                    </div>
                    <div
                      className="w-full h6-thin h6-sm-thin hover:bg-[#ffffff10] py-2 border-b-[1px] border-white hover:text-white"
                      onClick={() => setSettingPanelOpen(!settingPanelOpen)}
                    >
                      <Link to={postRoute()}>Post</Link>
                    </div>
                    <div className=" h6-thin h6-sm-thin  py-2" onClick={logout}>
                      Logout
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full">
                <div className="w-full cursor-pointer h-full flex text-center justify-center items-center">
                  <div
                    className="w-8 h-8 ml-2 bg-black mx-1 rounded-full  flex justify-center items-center"
                    onClick={() => setSettingPanelOpen(!settingPanelOpen)}
                  >
                    {' '}
                    <BagIconSvg />
                  </div>
                  <div
                    className={`absolute w-full h-[90vh] md:w-60 dashboard top-16 left-0  md:left-0  ${
                      !settingPanelOpen && 'hidden'
                    } `}
                  >
                    <div className="w-[90%] mx-6 h-auto shadow-lg shadow-black mt-2 md:w-60 primary-color rounded-lg z-100 ">
                      <div
                        className="w-full h6-thin h6-sm-thin hover:bg-[#ffffff10] py-2 border-b-[1px] border-white hover:text-white"
                        onClick={() => setSettingPanelOpen(!settingPanelOpen)}
                      >
                        <Link to={userRoute()}>
                          {user ? user.username : 'Profile'}
                        </Link>
                      </div>
                      <div
                        className="w-full h6-thin h6-sm-thin hover:bg-[#ffffff10] py-2 border-b-[1px] border-white hover:text-white"
                        onClick={() => setSettingPanelOpen(!settingPanelOpen)}
                      >
                        <Link to={postRoute()}>Post</Link>
                      </div>
                      <div
                        className=" h6-thin h6-sm-thin  py-2"
                        onClick={logout}
                      >
                        Logout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <RewardModal
        isModalOpen={rewardModal}
        setIsModalOpen={setIsRewardModal}
        points={20}
      />
    </div>
  );
};

export default Navbar;
