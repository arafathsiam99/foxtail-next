import Image from 'next/image';
import React from 'react';
import { FiUpload } from "react-icons/fi";
import MyProfile from '../../components/MyProfile/MyProfile';
import ProfileIncomplete from '../../components/ProfileIncomplete/ProfileIncomplete';

const MyGallery = () => {
    return (
      <>
        <div className="grid md:grid-cols-4 gap-5 mb-80">
          <div>
            <MyProfile />
          </div>
          <div className="col-span-3 mr-10">
            <ProfileIncomplete />
            <div className="border-2 mt-5 p-3">
              <div className="flex">
                <div className="outline-gray-300 outline-dashed	flex items-center justify-center py-20 px-4">
                  <p>Upload at list 1 photo of yourself</p>
                </div>
                <div className="ml-5">
                  <div className="flex">
                    <h1 className="font-normal text-xl leading-7 tracking-wide">
                      Photos
                    </h1>
                  </div>
                  <div className="flex items-center py-3">
                    <button className="border-2 border-fuchsia-600 px-3 py-2">
                      <div className="flex items-center">
                        <FiUpload className="text-fuchsia-600 ml-2" />
                        <h3 className="ml-1 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-600">
                          Upload Photo
                        </h3>
                      </div>
                    </button>
                    <h1 className="font-medium tracking-wide	leading-6 text-lg  ml-8">
                      Or, Drag and drop file here
                    </h1>
                  </div>
                  <h1 className="text-red-400 font-normal	text-base tracking-wide leading-5">
                    Image file shouldn’t be more than 1MB
                  </h1>
                </div>
              </div>
              <h1 className="font-normal text-xl leading-7 tracking-wide mt-6 mb-3">Gallery</h1>
              <div className="grid md:grid-cols-3 ">
                <Image src="https://i.ibb.co/1s6PtFd/Rectangle-134.png" alt="" />
                <Image src="https://i.ibb.co/KGbdMTP/Rectangle-135.png" alt="" />
                <Image src="https://i.ibb.co/V2nP6xg/Rectangle-136.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default MyGallery;