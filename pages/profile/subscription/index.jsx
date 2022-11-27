import React from "react";
import MyProfile from "../../components/MyProfile/MyProfile";
import ProfileIncomplete from "../../components/ProfileIncomplete/ProfileIncomplete";

const Subscription = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-5 mb-80">
        <div>
          <MyProfile />
        </div>
        <div className="col-span-3 mr-10">
          <ProfileIncomplete />
          <div className="border-2 mt-5">
            <h1 className="font-normal	text-xl	leading-7 tracking-wide	p-3">
              Manage Black Subscription
            </h1>
            <p className="text-gray-500 tracking-wide leading-5 px-3">
              Your Black Subsription will End:
              <span className="text-green-600 ml-2">Lifetime</span>
            </p>
            <div className="flex items-center justify-between my-5 mx-3">
              <button className="bg-fuchsia-700 text-white px-40 py-2">
                Add Credit Card
              </button>
              <h1 className="font-medium text-lg tracking-wide text-red-600 mr-56">
                Cancel Subscription
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
