import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 text-white max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="#" className="cursor-pointer">
            Home
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="cursor-pointer">
            Company
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="cursor-pointer">
            Resources
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="cursor-pointer">
            About
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="cursor-pointer">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div>
        <ul
          className={
            nav
              ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            REACT.
          </h1>
          <li className="p-4 border-b border-gray-600">
            <a href="#" className="cursor-pointer">
              Home
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#" className="cursor-pointer">
              Company
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#" className="cursor-pointer">
              Resources
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#" className="cursor-pointer">
              About
            </a>
          </li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
