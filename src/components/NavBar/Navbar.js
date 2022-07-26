import React from 'react';

const Navbar = () => {
  return (
    <div className="w-100 primary-color py-1 shadow-sm shadow-black text-gray-400 ">
      <div className="w-full flex items-center justify-evenly">
        <div className="flex items-center justify-center">
          <div className="px-2 h7-thin hover:text-white cursor-pointer">
            <div>main</div>
          </div>
        </div>
        <div className="primaryButtonColor px-6 py-1 rounded-sm">Login</div>
      </div>
    </div>
  );
};

export default Navbar;
