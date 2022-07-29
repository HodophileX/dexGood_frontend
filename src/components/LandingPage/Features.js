import React from 'react';

const Features = () => {
  return (
    <section className="h-[80vh] flex justify-center items-center my-24">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="h2-thin font-bold">Why Dexrepo?</div>
        <div className=" text-start w-80">
          <div className="body-1 body-1-sm font-bold text-gray-500 my-4">
            We are a <span className="text-orange-600">Non-Profit</span>.
            <br /> Dexrepo will be your personal good deeds
            <br />
            repository that will Store your data perennially with an option to
            go public.
          </div>
          <div className="body-1 body-sm-2 font-bold text-gray-500 my-4">
            Each deed in the near future will be a souvenir whose authenticity
            would not be questioned as the platform provides different band of
            verification services.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
