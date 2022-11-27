import React from "react";
import { FiUpload } from "react-icons/fi";
import { TbArrowsUpDown } from "react-icons/tb";
import { BiCaretDown } from "react-icons/bi";
import { VscAdd } from "react-icons/vsc";
import { MdFormatItalic } from "react-icons/md";
import SingleNft1 from "./components/SingleNft/SingleNft1";

const CreateNft = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 bg-color  py-4 pb-44 bg-color">
        <div className="md:col-span-2">
          <form action="">
            <h1 className="font-medium text-xl md:mx-40 ml-4 leading-8 tracking-wide">
              Create Non-fungible token (NFT)
            </h1>
            <div className="mx-4 md:mx-40 py-2">
              <h3 className=" font-normal text-lg mt-5 leading-7	tracking-wide">
                Upload File
              </h3>
              <div className="border-2 border-dashed bg-white mt-2 py-20 ">
                <button className="border-2 ml-28 border-fuchsia-600 px-3 py-2 md:ml-52">
                  <div className="flex items-center">
                    <FiUpload className="text-fuchsia-600 ml-2" />
                    <h3 className="ml-1 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-600">
                      Upload Photo
                    </h3>
                  </div>
                </button>
                <h3 className="mt-5 text-lg font-medium ml-24 md:ml-48">
                  Or, Drag and drop file here
                </h3>
                <h3 className="mt-5 text-lg ml-20 font-medium text-red-500 md:ml-44">
                  JPG, PNG, SVG, GIT. Max 10MB
                </h3>
              </div>
            </div>
            <div className=" md:mx-40 mx-5 py-3">
              <label
                for="Title"
                className="block mb-2 text-lg font-medium leading-7	tracking-wide"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className=" border-2 border-gray-300 text-gray-900 text-sm  block w-full p-2.5 outline-none"
                placeholder=""
                required
              />
            </div>
            <div className=" md:mx-40 mx-5 py-3">
              <label
                for="Title"
                className="block mb-2 text-lg font-medium leading-7	tracking-wide"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                className=" border-2 border-gray-300 text-gray-900 text-sm  block w-full p-5 outline-none"
                placeholder=""
                required
              />
            </div>

            <div className="relative  md:mx-40 mx-5 py-3">
              <label
                for="tags"
                className=" text-lg font-medium leading-7	tracking-wide"
              >
                Tags
              </label>
              <input
                type="text"
                id="location"
                className="relative  border-2 border-gray-300 outline-none text-sm block w-full  p-2.5 my-1 "
                placeholder=""
                required=""
              />
            </div>
            <div className="relative  md:mx-40 mx-5 py-3">
              <label
                for="perks"
                className=" text-lg font-medium leading-7	tracking-wide"
              >
                Perks
              </label>
              <input
                type="text"
                id="location"
                className="relative  border-2 border-gray-300 outline-none text-sm block w-full  p-2.5 my-1 "
                placeholder=""
                required=""
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-5  md:mx-40 mx-5">
              <div className="relative   py-3">
                <div className="flex items-center justify-between">
                  <label
                    for="price"
                    className=" text-lg font-medium leading-7	tracking-wide"
                  >
                    Price
                  </label>
                  <h1>worth of 02.21 USD</h1>
                </div>
                <input
                  type="text"
                  id="date"
                  className="relative w-full  border-2 border-gray-300 outline-none text-sm block   p-2.5 my-1 "
                  placeholder=""
                  required=""
                />
                <div className="flex itmes-center justify-between">
                  <img
                    src="https://i.ibb.co/TmH6qfh/rsz-2d0dbcbff37dac3ebd093f05b6dee7cf-expires-1668384000-signature-rfzlm-lm50m-xb-ppga-1-fa6joo04d-mm.png"
                    alt=""
                    className="w-5 h-5 absolute top-14 ml-2"
                  />
                  <button
                    type="button"
                    className="flex absolute inset-y-0 top-6 right-0 items-center pr-3"
                  >
                    <TbArrowsUpDown />
                  </button>
                </div>
              </div>
              <div className="relative py-3">
                <label
                  for="quantity"
                  className=" text-lg font-medium leading-7	tracking-wide"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="time"
                  className="relative  border-2 border-gray-300 outline-none text-sm block w-full  p-2.5 my-1 "
                  placeholder="04:40pm"
                  required=""
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-5 md:mx-40 mx-5">
              <div className="relative   py-3">
                <label
                  for="duration"
                  className=" text-lg font-medium leading-7	tracking-wide"
                >
                  Duration
                </label>
                <input
                  type="text"
                  id="voice-search"
                  className="relative  border-2 border-gray-300 outline-none text-sm block w-full  p-2.5 my-1 "
                  placeholder="04 Days"
                  required=""
                />
                <button
                  type="button"
                  className="flex absolute inset-y-0 top-6 right-0 items-center mr-2"
                >
                  <BiCaretDown />
                </button>
              </div>
              <div className="relative  py-3">
                <div className="flex items-center justify-between">
                  <label
                    for="royalties"
                    className=" text-lg font-medium leading-7	tracking-wide"
                  >
                    Royalties
                  </label>
                  <MdFormatItalic />
                </div>
                <input
                  type="text"
                  id="voice-search"
                  className="relative  border-2 border-gray-300 outline-none text-sm block w-full  p-2.5 my-1 "
                  placeholder="Miximum  70%"
                  required=""
                />
              </div>
            </div>
          </form>
        </div>
        <div className="">
          <h1 className="font-medium text-xl flex justify-center leading-8 tracking-wide ">
            Preview NFT
          </h1>
          <SingleNft1 />
          <div className="bg-white border-2 p-3 md:mx-5 mt-6">
            <div className="flex items-center ">
              <VscAdd className="font-color" />
              <h1 className="font-medium text-xl leading-6	tracking-wide font-color	ml-2">
                Add Collaborater
              </h1>
            </div>
            <h2 className="text-lg	my-2">Enter freebie code</h2>

            <form className="flex items-center mr-20">
              <div className="relative w-full my-2">
                <input
                  type="text"
                  id="apply"
                  className=" border-2  border-gray-300 text-gray-900 text-sm  block w-full pl-10 p-2 "
                  placeholder=""
                  required=""
                />
              </div>
              <button
                type="submit"
                className="py-1.5 px-6 rounded-md ml-2 text-sm font-medium text-gray-600 bg-gray-300 outline-none border-2"
              >
                <h1 className="font-medium text-lg">Apply</h1>
              </button>
            </form>

            <button className="my-btn w-full text-lg font-medium flex items-center justify-center py-2 mt-3">
              Create NFT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNft;
