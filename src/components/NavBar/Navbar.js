import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginRoute } from '../../route';
import { userLogout } from '../../_redux/action/user';
import { BagIconSvg, EditButton } from '../Common/svg/icon';

const Navbar = () => {
  const user = useSelector(state => state.user.user);
  const [settingPanelOpen, setSettingPanelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(userLogout());
    setSettingPanelOpen(false);
    navigate(loginRoute());
  };

  return (
    <div className="w-100 primary-color  h-14 shadow-sm shadow-black flex items-center justify-center relative z-100">
      <div className="w-full f-full flex items-center justify-start text-white mx-2 md:mx-40">
        <div className="h-full w-full flex justify-start">
          <div className="h5-thin cursor-pointer font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
            <Link to={''} className="cursor-pointer h-full p-0">
              Plexus
            </Link>
          </div>
        </div>
        <div className="w-full h-14 hidden md:flex">
          <div className="w-full px-2 h7-thin  cursor-pointer flex justify-end h-full text-[#a3a3a3]">
            <div className=" h-full hover:text-white flex text-center justify-center items-center">
              <Link
                to={'main'}
                className="cursor-pointer h-full flex text-center justify-center items-center   px-6"
              >
                main
              </Link>
            </div>
            <div className="hover:text-white  h-full ">
              <Link
                to={'vision'}
                className="cursor-pointer h-full flex text-center justify-center items-center mx-6 px-6"
              >
                Vision
              </Link>
            </div>
            {!user ? (
              <div className=" h-full ">
                <Link
                  to={'login'}
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
                    className={`absolute w-60 bg-black top-16 z-10 px-6 pb-2 rounded-md  topArrow ${
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
        <div className="w-full h-14 flex md:hidden justify-end ">
          <div className="w-full  h7-thin hover:text-white cursor-pointer flex justify-end h-full items-center">
            <div className="h-full ">
              <Link
                to={'vision'}
                className="cursor-pointer h-full flex text-center justify-center items-center  px-6"
              >
                Vision
              </Link>
            </div>
            {!user ? (
              <div className="ml-2 h-full flex justify-center items-center">
                <BagIconSvg />
              </div>
            ) : (
              <div className="w-full h-full">
                <div className="w-full cursor-pointer h-full flex text-center justify-center items-center">
                  <div
                    className="w-8 h-8 bg-black mx-1 rounded-full  flex justify-center items-center"
                    onClick={() => setSettingPanelOpen(!settingPanelOpen)}
                  >
                    {' '}
                    <BagIconSvg />
                  </div>
                  <div
                    className={`absolute w-[90%] h-[50vh] md:w-60 bg-black top-16 left-0  md:left-0 z-10 mx-6 rounded-lg topArrowMobile ${
                      !settingPanelOpen && 'hidden'
                    } `}
                  >
                    <div
                      className="w-[100vw] h6-thin h6-sm-thin border-b-[1px] border-white py-2"
                      onClick={logout}
                    >
                      Logout
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
