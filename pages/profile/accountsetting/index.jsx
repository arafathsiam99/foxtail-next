import React from 'react';
import MyProfile from "../../components/MyProfile/MyProfile";
import ProfileIncomplete from "../../components/ProfileIncomplete/ProfileIncomplete";
import { CgChevronDown } from "react-icons/cg";

const AccountSetting = () => {
    return (
      <>
        <div className="grid md:grid-cols-4 gap-5 mb-80">
          <div>
            <MyProfile />
          </div>
          <div className="col-span-3 mr-10">
            <ProfileIncomplete />
            <div className="border-2 mt-5 px-3 py-2">
              <h1 className="text-xl font-normal tracking-wide">Change Sex</h1>
              <div className="grid md:grid-cols-2 my-2">
                <div>
                  <input
                    type="text"
                    id="attracted to"
                    className=" border-2 text-lg block w-full  py-2   relative"
                    placeholder="Female"
                    required
                  />
                  <div className="absolute  right-250 top-[355px] ">
                    <CgChevronDown className="w-7 h-7" />
                  </div>
                </div>
                <div className="ml-5 mt-2">
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
                    <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none   rounded-full  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-gray-500 after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
                    <h3 class="ml-3 text-xl	font-normal	 leading-7	tracking-wide	">
                      Set Password
                    </h3>
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5 my-2 ">
                <div>
                  <h1 className="text-xl font-normal tracking-wide mb-2">
                    Change Email
                  </h1>
                  <button className="bg-fuchsia-700 text-white w-full text-left	px-4 rounded-sm py-2">
                    avsbjlnk7@gmail.com
                  </button>
                </div>
                <div>
                  <h1 className="text-xl font-normal tracking-wide mb-2">
                    Change Username
                  </h1>
                  <button className="bg-fuchsia-700 text-white rounded-sm w-full text-left	px-4 py-2">
                    Jak543
                  </button>
                </div>
              </div>
            </div>
            <div className="border-2 mt-5">
              <div className="grid gap-5 md:grid-cols-2 p-3">
                <div>
                  <h1 className="text-xl tracking-wide">Photo Verification</h1>
                  <p className="text-base tracking-wide text-gray-400 my-2">
                    Show you are, who you say you are
                  </p>
                  <button className="bg-fuchsia-700 text-white rounded-sm w-full px-4 py-2 text-center">
                    Submit Document
                  </button>
                </div>
                <div>
                  <h1 className="text-xl tracking-wide">STD Verification</h1>
                  <p className="text-base tracking-wide text-gray-400 my-2">
                    Show member you care about your health, and theirs.
                  </p>
                  <button className="bg-fuchsia-700 text-white rounded-sm w-full px-4 py-2 text-center">
                    Submit Document
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <h1 className="text-lg leading-7 tracking-wide text-gray-400 underline ">
                Deactivate Your Account
              </h1>
              <h1 className="text-lg leading-7 tracking-wide text-red-500">
                Close Your Account
              </h1>
            </div>
          </div>
        </div>
      </>
    );
};

export default AccountSetting;