import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="w-100 primary-color py-1 shadow-sm shadow-black text-gray-400 ">
      <div className="w-full flex items-center justify-center text-white">
        <div>
          <div className="h5-thin cursor-pointer font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
            <Link to={'main'} className="cursor-pointer">
              Dex<span className="caption">Repo</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="px-2 h7-thin hover:text-white cursor-pointer"></div>
        </div>
        {/*         
        <div className="primaryButtonColor px-6 py-1 rounded-sm">Login</div> */}
      </div>
    </div>
  );
};

export default Navbar;
