import React from 'react';

const LoginContent = () => {
  return (
    <section className="h-[95vh]">
      <div className="flex w-full h-full">
        <div className="flex w-full">
          <div className="dashboard p-10 rounded-md  w-full flex justify-start flex-col">
            <div className="h4-thin font-bold text-[#f1f1f1]">
              Login is forbidden for now
            </div>
            <div className="h3-thin font-bold py-6">Sign In</div>
            <div className="flex flex-col items-center">
              <div>Phone no.</div>
              <div className="flex items-start text-black">
                <div className="">
                  <input
                    type="text"
                    placeHolder="+91"
                    value={'+91'}
                    disabled={true}
                    className="p-2 bg-transparent border-0 w-12 body-1 outline-0"
                  />
                  <div className=" border-b-[1px] border-black"></div>
                </div>
                <div className="">
                  <input
                    type="text"
                    placeHolder="Type here"
                    className="p-2 bg-transparent border-0 w-60 body-1 outline-0"
                  />

                  <div className="w-full border-b-[1px] border-black"></div>
                </div>
              </div>
              <div className="mt-10 flex justify-center items-center w-full">
                <div className="p-[1px] bg-purple-900 rounded-2xl flex justify-center items-center cursor-pointer">
                  <div className="p-2 px-6 rounded-2xl bg-blue-500 hover:bg-blue-600">
                    <s> Get otp</s>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-0 md:w-[80%]"></div>
      </div>
    </section>
  );
};

export default LoginContent;
