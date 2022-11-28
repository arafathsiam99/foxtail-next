import React from "react";
import { useState } from "react";
import Icons from "../../Icons/Icons";
import { HiX, HiMenu } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`flex items-center shadow-xl py-6 md:px-14 px-4 dark:bg-slate-800  justify-between ${
        open ? `mb-[480px]` : `mb-0`
      }`}
    >
      <div className="flex items-center ">
        <div onClick={() => setOpen(!open)} className="md:hidden pr-2 mt-2">
          {open ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
        </div>
        <div>
          <img
            src="https://i.ibb.co/Cvj6VX3/Group-62.png"
            alt=""
            className="md:mr-20 w-3/4 h-3/4 md:h-1/2 md:w-1/2"
          />
        </div>
        <div className="flex justify-center items-center text-center ">
          <ul>
            <div
              className={`flex flex-col  md:flex-row  md:mt-0 gray-text  mt-5 absolute md:top-8 md:mr-20  ${
                open
                  ? `w-full top-[65px]  left-1/2 transform -translate-x-1/2 `
                  : `top-[-490px]`
              }`}
            >
              <div className="flex items-center  justify-center my-2 md:hidden border-b-2">
                <FiSearch className="text-black w-6 h-6" />
                <Link
                  href="/"
                  className="text-black text-xl leading-6 font-medium tracking-wide ml-1 my-3 hover:custom-text "
                >
                  Search
                </Link>
              </div>
              <div className="text-xl leading-6 font-medium tracking-wide my-3 md:mx-3 md:my-0 border-b-2 md:border-b-0 hover:custom-text pb-4">
                <Link href="/" className="hover:text-fuchsia-500">
                  Home
                </Link>
              </div>
              <div className="text-xl leading-6 font-medium tracking-wide my-3 md:mx-3 md:my-0 border-b-2 md:border-b-0 hover:custom-text pb-4">
                <Link href="/nft" className="hover:text-fuchsia-500">
                  NFTs
                </Link>
              </div>
              <div className="text-xl leading-6 font-medium tracking-wide my-3 md:mx-3 md:my-0 border-b-2 md:border-b-0  pb-4">
                <Link href="/member" className=" hover:text-fuchsia-500">
                  Member
                </Link>
              </div>
              <div className="text-xl leading-6 font-medium tracking-wide my-3 md:mx-3 md:my-0 border-b-2 md:border-b-0  pb-4">
                <Link href="/events" className="hover:text-fuchsia-500">
                  Events
                </Link>
              </div>
              <div className="text-xl leading-6 font-medium tracking-wide mx-3 my-3 md:my-0 border-b-2 md:border-b-0 hover:custom-text pb-4">
                <Link href="/" className="hover:text-fuchsia-500">
                  Desires
                </Link>
              </div>
              <button className="w-8/12 mx-auto my-btn  py-3 mt-3 rounded-md md:hidden">
                My Profile
              </button>
            </div>
          </ul>
        </div>
      </div>
      <div className="md:mb-0">
        <Icons />
      </div>
    </div>
  );
};

export default Navbar;
