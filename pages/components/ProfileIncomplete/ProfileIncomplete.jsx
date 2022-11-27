import React from 'react';

const ProfileIncomplete = () => {
    return (
      <>
        <div className="border-2 mt-5 py-2 pl-3 ">
          <h1 className="font-medium text-xl leading-8	tracking-wide text-red-500">
            You Profile is Incomplete
          </h1>
          <p className="font-normal	text-base tracking-wide	leading-5 text-gray-400">
            Please complete your profile for get more reach
          </p>
          <div>
            <div className="flex items-center pt-2">
              <div className="w-4 h-4 bg-fuchsia-700"></div>
              <h3 className="ml-2 font-normal text-fuchsia-700 text-lg	leading-6 tracking-wide">
                Add you Bio (20+ Charracter)
              </h3>
            </div>
            <div className="flex items-center pt-2">
              <div className="w-4 h-4 bg-fuchsia-700"></div>
              <h3 className="ml-2 text-fuchsia-700 font-normal text-lg	leading-6 tracking-wide">
                Upload your Profile Photo
              </h3>
            </div>
            <div className="flex items-center pt-2">
              <div className="w-4 h-4 bg-fuchsia-700"></div>
              <h3 className="ml-2 text-fuchsia-700 font-normal text-lg	leading-6 tracking-wide">
                Uplaod 1 Photo on Your Gallery
              </h3>
            </div>
          </div>
        </div>
      </>
    );
};

export default ProfileIncomplete;