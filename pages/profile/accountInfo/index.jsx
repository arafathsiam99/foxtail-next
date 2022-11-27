import React from "react";
import MyProfile from "../../components/MyProfile/MyProfile";
import ProfileIncomplete from "../../components/ProfileIncomplete/ProfileIncomplete";
import { AiFillStar } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import { TbItalic, TbUnderline, TbLetterB } from "react-icons/tb";
import { CgChevronDown } from "react-icons/cg";

const AccountInfo = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-5 mb-80">
        <div>
          <MyProfile />
        </div>
        <div className="col-span-3   md:mr-10 mx-10 ">
          <ProfileIncomplete />
          <div className="border-2  mt-5">
            <div className="flex">
              <img
                src="https://i.ibb.co/s6073KS/Rectangle-129.png"
                alt=""
                className="ml-5 mt-5"
              />
              <div className="ml-5 mt-5">
                <div className="flex">
                  <h1 className="font-normal text-xl leading-7	tracking-wide">
                    Profile Photo
                  </h1>
                  <AiFillStar className="h-3 w-3 text-red-600 mt-1" />
                </div>
                <div className="md:flex items-center py-3">
                  <button className="border-2 border-fuchsia-600 px-3 py-2">
                    <div className="flex items-center sm:px-16 md:px-0">
                      <FiUpload className="text-fuchsia-600 ml-2" />
                      <h3 className="ml-1 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-600">
                        Select Photo
                      </h3>
                    </div>
                  </button>
                  <h1 className="font-medium tracking-wide	leading-6 text-lg text-red-500 md:ml-8 sm:ml-20 sm:mt-2 md:mt-0">
                    Remove Photo
                  </h1>
                </div>
                <h1 className="text-red-400 font-normal	text-base tracking-wide leading-5">
                  Image file shouldn’t be more than 1MB
                </h1>
              </div>
            </div>
            <hr className="my-8 md:mx-2 " />
            <div className="mx-5">
              <label for="bio" className="block mb-3 mx-3 text-sm font-medium">
                Bio
              </label>
              <input
                type="text"
                id="bio"
                className="bg-gray-50 border border-gray-300 text-sm  block w-full pb-14 px-1 pt-1  relative"
                placeholder="Honesty is the sexy"
                required
              />
            </div>
            <div className="flex absolute  md:bottom-14  md:ml-2  ">
              <TbLetterB className="mr-2" />
              <TbItalic className="mr-2" />
              <TbUnderline />
            </div>
            <h1 className="block mb-2 text-sm font-medium mt-5">Klinks</h1>
            <div className="border-2 flex">
              <div className="flex px-1 my-4 ml-2">
                <button className="bg-fuchsia-800 font-medium text-lg	 text-white	 px-4 py-2 mr-2 rounded-md">
                  Bdsm
                </button>
                <button className="bg-fuchsia-800 font-medium text-lg	 text-white	 px-4 py-2 mr-2 rounded-md">
                  Anal
                </button>
                <button className="bg-fuchsia-800 font-medium text-lg	 text-white	 px-4 py-2 mr-2 rounded-md">
                  Toys
                </button>
                <button className="bg-fuchsia-800 font-medium text-lg	 text-white	 px-4 py-2 mr-2 rounded-md">
                  Milf
                </button>
              </div>
            </div>
            <label for="bio" className="block mb-2 text-sm font-medium mt-5">
              Attracted To
            </label>
            <input
              type="text"
              id="attracted to"
              className="bg-gray-50 border-2 text-sm  block w-full  px-1 py-5  relative"
              placeholder="Male, Female, Gay"
              required
            />
            <div className="absolute right-0 top-[890px] mr-20">
              <CgChevronDown className="w-7 h-7" />
            </div>
            <label for="bio" className="block mb-2 text-sm font-medium mt-5">
              Sexuality
            </label>
            <input
              type="text"
              id="attracted to"
              className="bg-gray-50 border-2 text-sm  block w-full  px-1 py-5  relative"
              placeholder="Hetarosexual, Homosexual"
              required
            />
            <div className="absolute right-0 top-[1000px] mr-20">
              <CgChevronDown className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
