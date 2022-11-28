import React from "react";
import { FiUpload, FiCalendar, FiDollarSign } from "react-icons/fi";
import { BiCaretDown } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
import SingleEvent from "./components/SingleEvent/SingleEvent";

const CreateEvent = () => {
  return (
    <>
      <div className="bg-color grid md:grid-cols-3 py-4 pb-44">
        <div className="md:col-span-2">
          <form action="">
            <h1 className="font-medium text-xl md:mx-40 ml-4 leading-8 tracking-wide">
              Create Event
            </h1>
            <div className="mx-4 md:mx-40 py-2">
              <h3 className="font-normal text-lg mt-5 leading-7	tracking-wide">
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
                className=" border-2 border-gray-300 text-gray-900 text-sm  block w-full p-2.5"
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
                className=" border-2 border-gray-300 text-gray-900 text-sm  block w-full p-5"
                placeholder=""
                required
              />
            </div>

            <div className="relative md:mx-40 mx-5 py-3">
              <label
                for="location"
                className=" text-lg font-medium leading-7	tracking-wide"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="relative  border-2 border-gray-300 outline-none text-sm block w-full  p-2.5 my-1 "
                placeholder="San Fransisco, California, US"
                required=""
              />
              <button
                type="button"
                className="flex absolute inset-y-0 top-6 right-0 items-center pr-3"
              >
                <VscLocation />
              </button>
            </div>
            <div className="grid md:grid-cols-2 md:gap-5 md:mx-40 mx-5">
              <div className="relative  py-3">
                <label
                  for="date"
                  className=" text-lg font-medium leading-7	tracking-wide"
                >
                  Date
                </label>
                <input
                  type="text"
                  id="date"
                  className="relative w-full  border-2 border-gray-300 outline-none text-sm block   p-2.5 my-1 "
                  placeholder="22-24-2022"
                  required=""
                />
                <button
                  type="button"
                  className="flex absolute inset-y-0 top-6 right-0 items-center pr-3"
                >
                  <FiCalendar />
                </button>
              </div>
              <div className="relative py-3">
                <label
                  for="time"
                  className=" text-lg font-medium leading-7	tracking-wide"
                >
                  Time
                </label>
                <input
                  type="text"
                  id="time"
                  className="relative  border-2 border-gray-300 outline-none text-sm block w-full  p-2.5 my-1 "
                  placeholder="04:40pm"
                  required=""
                />
                <button
                  type="button"
                  className="flex absolute inset-y-0 top-6 right-0 items-center pr-3"
                >
                  <BiCaretDown />
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-5 md:mx-40 mx-5">
              <div className="relative   py-3">
                <label
                  for="location"
                  className=" text-lg font-medium leading-7	tracking-wide"
                >
                  Ticket Price
                </label>
                <input
                  type="text"
                  id="voice-search"
                  className="relative  border-2 border-gray-300 outline-none text-sm block w-full  p-2.5 my-1 "
                  placeholder=""
                  required=""
                />
                <button
                  type="button"
                  className="flex absolute inset-y-0 top-6 left-0 items-center ml-2"
                >
                  <FiDollarSign />
                </button>
              </div>
              <div className="relative  py-3">
                <label
                  for="location"
                  className=" text-lg font-medium leading-7	tracking-wide"
                >
                  Total Reseved
                </label>
                <input
                  type="text"
                  id="voice-search"
                  className="relative  border-2 border-gray-300 outline-none text-sm block w-full  p-2.5 my-1 "
                  placeholder="80"
                  required=""
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="hidden md:block">
            <h1 className="font-medium text-xl flex justify-center leading-8 tracking-wide">
              Preview NFT
            </h1>
            <div className="">
              <SingleEvent />
            </div>
          </div>
          <div className="border-2 p-3  mx-5 my-5 md:my-0 bg-white">
            <h1 className="font-medium text-lg leading-6	tracking-wide	">
              Type of event
            </h1>
            <div className="flex py-2 ">
              <div className="form-check mr-2">
                <input
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-black checked:border-black transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="public"
                  checked
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault1"
                >
                  Public
                </label>
              </div>
              <div className="form-check ">
                <input
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-black checked:border-black transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="private"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault2"
                >
                  Private
                </label>
              </div>
            </div>
            <button className="my-btn w-full text-lg font-medium flex items-center justify-center py-2 mt-3">
              Create Event
            </button>
          </div>
        </div>
        <div className="md:hidden block">
          <h1 className="font-medium text-xl flex justify-center leading-8 tracking-wide">
            Preview NFT
          </h1>
          <SingleEvent />
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
