import React from "react";
import { IoDiamondOutline, IoShareSocialOutline } from "react-icons/io5";

const MyProfile = () => {
  return (
    <>
      <div>
        <div className="border-2  py-2 mt-5 ml-14">
          <h1 className="font-medium text-xl tracking-wide leading-7 pl-4">
            My Profile
          </h1>
          <div className="font-normal text-xl leading-6 tracking-wide	py-2">
            <link rel="stylesheet" href="" className="block" />
            <h3 className=" hover:bg-pink-100 bg-white hover:border-l-8 hover:border-fuchsia-600 py-2 border-l-8 border-white pl-2">
              Account Information
            </h3>
            <link rel="stylesheet" href="" className="block" />
            <h3 className="hover:bg-pink-100 bg-white hover:border-l-8 hover:border-fuchsia-600 py-2 border-l-8 border-white pl-2">
              My Gallery
            </h3>
            <link rel="stylesheet" href="" className="block" />
            <h3 className=" hover:bg-pink-100 bg-white hover:border-l-8 hover:border-fuchsia-600 py-2 border-l-8 border-white pl-2">
              App Settings
            </h3>
            <link rel="stylesheet" href="" className="block" />
            <h3 className=" hover:bg-pink-100 bg-white hover:border-l-8 hover:border-fuchsia-600 py-2 border-l-8 border-white pl-2">
              Subscription & Settings
            </h3>
            <link rel="stylesheet" href="" className="block" />
            <h3 className=" hover:bg-pink-100 bg-white hover:border-l-8 hover:border-fuchsia-600 py-2 border-l-8 border-white pl-2">
              Account Settings
            </h3>
          </div>
        </div>
        <div className="ml-14">
          <div className="border-2 px-5 py-2 mt-10 ">
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/n6RwZ67/Vector-7.png"
                alt=""
                className="w-6 h-6"
              />
              <h1 className="font-normal text-base	tracking-wide	leading-6	ml-2">
                Create Couple Profile Picture
              </h1>
            </div>
          </div>
          <div className="border-2 px-5 py-2 mt-4">
            <div className="flex items-center">
              <IoDiamondOutline className="w-5 h-5" />
              <h1 className="font-normal text-base	tracking-wide	leading-6	ml-2">
                Become a Black Member
              </h1>
            </div>
          </div>
          <div className="border-2 px-5 py-2 mt-4">
            <div className="flex items-center">
              <IoShareSocialOutline className="w-5 h-5" />
              <h1 className="font-normal text-base	tracking-wide	leading-6	ml-2">
                Share Profile
              </h1>
            </div>
          </div>
          <div className="border-2 px-5 py-2 mt-4">
            <div className="flex items-center">
              <IoShareSocialOutline className="w-5 h-5" />
              <h1 className="font-normal text-base	tracking-wide	leading-6	ml-2">
                Share Foxtail
              </h1>
            </div>
          </div>
          <div>
            <h1 className="font-normal text-lg	tracking-wide	leading-6 mt-5 ml-12">
              Your personal QR Code
            </h1>
            <p className="font-normal text-xs		tracking-wide	leading-4 text-gray-500 mt-1 mx-2">
              Scan from your friends mobile and get connected
            </p>
            <img
              src="https://i.ibb.co/kMM8PW7/9781118370711-fg0101-fmt-1.png"
              alt=""
              className="mt-2 ml-12"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
