import React from "react";
import { FiSearch, FiUsers, FiPlus } from "react-icons/fi";
import { BiMessageAltDots } from "react-icons/bi";
import { TbBell } from "react-icons/tb";
import { RiArrowDropDownFill } from "react-icons/ri";
import dynamic from "next/dynamic";
import Image from "next/image";
const ThemeButton = dynamic(
  () => import("../../components/Theme_Button/ThemeButton"),
  { ssr: false }
);

const Icons = () => {
  return (
    <>
      <ul className="flex justify-center items-center">
        <li className="mx-5 hidden md:block">
          <FiSearch className="w-6 h-6" />
        </li>
        <div className="h-[30px] bg-gray-400 w-[2px] mx-5 md:block hidden"></div>
        <li className="md:mx-5">
          <button className="font-medium text-xs  md:text-lg md:leading-5 tracking-wide create-btn py-2 px-6  md:px-4 rounded-md flex items-center">
            Create
            <FiPlus className="w-4 h-4 md:w-5 md:h-5 ml-2" />
          </button>
        </li>
        <div className="h-[30px] bg-gray-400 w-[2px] ml-5 md:block hidden"></div>
        <div className="relative">
          <li className="md:mx-5 mx-2">
            <BiMessageAltDots className="w-6 h-6" />
            <div className="absolute md:top-[-10px] top-[-13px] right-0">
              <div className="bg-purple-800 text-white rounded-full  w-[17px] h-[17px] md:w-[20px] md:h-[20px]">
                <p className="md:ml-1.5 ml-1 md:mb-2 text-sm">4</p>
              </div>
            </div>
          </li>
        </div>
        <div className="h-[30px] bg-gray-400 w-[2px] ml-5 md:block hidden"></div>
        <div className="relative">
          <li className="md:mx-5 mx-2">
            <FiUsers className="w-6 h-6" />
            <div className="absolute md:top-[-10px] top-[-13px] right-0">
              <div className="bg-purple-800 text-white rounded-full  w-[17px] h-[17px] md:w-[20px] md:h-[20px]">
                <p className="md:ml-1.5 ml-1 md:mb-2 text-sm">4</p>
              </div>
            </div>
          </li>
        </div>
        <div className="h-[30px] bg-gray-400 w-[2px] ml-5 md:block hidden"></div>
        <div className="relative">
          <li className="md:mx-5 mx-2">
            <TbBell className="w-6 h-6" />
          </li>
          <div className="absolute md:top-[-10px] top-[-13px] right-0">
            <div className="bg-purple-800 text-white rounded-full  w-[17px] h-[17px] md:w-[20px] md:h-[20px]">
              <p className="md:ml-1.5 ml-1 md:mb-2 text-sm">4</p>
            </div>
          </div>
        </div>
        <div className="h-[30px] bg-gray-400 w-[2px] ml-5 md:block hidden"></div>
        <li>
          <div className="md:flex justify-center  hidden">
            <div>
              <div className="border-2 flex items-center py-2 px-3 rounded-sm justify-center relative ml-4">
                <Image
                  className="rounded-full ring-2 ring-gray-300 dark:ring-violet-500"
                  src="https://i.ibb.co/02Rn9g0/fe4f29a38707617f19db951e686aeb22.png"
                  alt="Bordered avatar"
                  height={20}
                  width={20}
                />
                <RiArrowDropDownFill className="h-6 w-6" />
              </div>
            </div>
          </div>
        </li>
        <div>
          <ThemeButton />
        </div>
      </ul>
    </>
  );
};

export default Icons;
