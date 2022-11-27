import React from "react";
import { CgChevronDown } from "react-icons/cg";
import MyProfile from "../../components/MyProfile/MyProfile";
import ProfileIncomplete from "../../components/ProfileIncomplete/ProfileIncomplete";

const AppSetting = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-5 mb-80">
        <div>
          <MyProfile />
        </div>
        <div className="col-span-3 mr-10">
          <ProfileIncomplete />
          <div className="border-2 mt-5 p-3">
            <h1 className="text-xl font-normal tracking-wide">Languages</h1>

            <div className="grid md:grid-cols-2 my-2">
              <div>
                <input
                  type="text"
                  id="attracted to"
                  className=" border-2 text-sm rounded-md block w-full  py-2 px-40  relative"
                  placeholder="English"
                  required
                />
                <div className="absolute  right-250 top-[355px] ">
                  <CgChevronDown className="w-7 h-7" />
                </div>
              </div>
              <div>
                <button className="bg-fuchsia-700 text-white py-2 px-40 rounded-md ml-5">
                  Manage Pre-Block
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-5">
              <label
                for="toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="toggle"
                  className="sr-only peer"
                />
                <div class="w-12 h-6 bg-gray-300 peer-focus:outline-none   rounded-full  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-gray-500 after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
                <h3 class="ml-3 text-xl	font-normal	 leading-7	tracking-wide	">
                  Make Profile Public
                </h3>
              </label>
              <label
                for="toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="toggle"
                  className="sr-only peer"
                />
                <div class="w-12 h-6 bg-gray-300 peer-focus:outline-none   rounded-full  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-gray-500 after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
                <h3 class="ml-3 text-xl	font-normal	 leading-7	tracking-wide	">
                  Show My Profile
                </h3>
              </label>
              <label
                for="toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="toggle"
                  className="sr-only peer"
                />
                <div class="w-12 h-6 bg-gray-300 peer-focus:outline-none   rounded-full  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-gray-500 after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
                <h3 class="ml-3 text-xl	font-normal	 leading-7	tracking-wide	">
                  Distance Metric <span className="text-xs">KM/Mile</span>
                </h3>
              </label>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-5">
              <label
                for="toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="toggle"
                  className="sr-only peer"
                />
                <div class="w-12 h-6 bg-gray-300 peer-focus:outline-none   rounded-full  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-gray-500 after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
                <h3 class="ml-3 text-xl	font-normal	 leading-7	tracking-wide	">
                  Recieve Email
                </h3>
              </label>
              <label
                for="toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="toggle"
                  className="sr-only peer"
                />
                <div class="w-12 h-6 bg-gray-300 peer-focus:outline-none   rounded-full  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-gray-500 after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
                <h3 class="ml-3 text-xl	font-normal	 leading-7	tracking-wide	">
                  Show Me Online
                </h3>
              </label>
              <label
                for="toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="toggle"
                  className="sr-only peer"
                />
                <div class="w-12 h-6 bg-gray-300 peer-focus:outline-none   rounded-full  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-gray-500 after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
                <h3 class="ml-3 text-xl	font-normal	 leading-7	tracking-wide	">
                  Visible to Like Only
                </h3>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSetting;
