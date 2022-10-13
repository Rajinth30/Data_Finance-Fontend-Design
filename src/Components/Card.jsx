import React from "react";
import single from "../Assets/single.png";
import double from "../Assets/double.png";
import triple from "../Assets/triple.png";

const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={single}
            alt=""
          />
          <h2 className="text-2xl font-bold py-8 text-center">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Grant User</p>
            <p className="py-2 border-b mx-8">Send upto 2GB</p>
          </div>
          <button className="bg-[#00df9a] text-black w-[200px] rounded-3xl hover:bg-green-500 ease-in-out duration-300 font-medium my-6 py-3 mx-auto px-6">Start Trial</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 bg-gray-100">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
            src={double}
            alt=""
          />
          <h2 className="text-2xl font-bold py-8 text-center">Double User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Grant User</p>
            <p className="py-2 border-b mx-8">Send upto 2GB</p>
          </div>
          <button className="text-[#00df9a] bg-black w-[200px] rounded-3xl hover:bg-gray-700 ease-in-out duration-300 font-medium my-6 py-3 mx-auto px-6">Start Trial</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt=""
          />
          <h2 className="text-2xl font-bold py-8 text-center">Triple User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Grant User</p>
            <p className="py-2 border-b mx-8">Send upto 2GB</p>
          </div>
          <button className="bg-[#00df9a] text-black w-[200px] rounded-3xl hover:bg-green-500 ease-in-out duration-300 font-medium my-6 py-3 mx-auto px-6">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
