import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4 ">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text:2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <input
              className="p-3  w-full rounded-md text-black"
              type="email"
              placeholder="Enter email"
            />
            <button className="bg-[#00df9a] text-black w-[200px] rounded-3xl hover:bg-green-500 ease-in-out duration-300 font-medium my-6 py-3 ml-4 px-6">
              Noify Me!
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
